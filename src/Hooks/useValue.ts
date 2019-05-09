import { InputNumberFormatter, InputNumberParser, InputNumberProps } from "../interface";
import { useState, useEffect, useRef } from "react";
import { DefineDefaultValue } from "utils-hooks";

const FIX_NUMBER = 1000;

function isEmpy(val: string | number) {
    return val === undefined || val === null;
}

/**
 * 保留精度
 * @param precision
 * @param val
 */
export function coverPrecision(precision: number, val: string | number): string {
    if (precision === undefined || val === undefined || val === "") {
        return String(val);
    } else {
        return parseFloat(val + "").toFixed(precision);
    }
}

/**
 * 默认格式化
 * @description 返回数值的字符串
 * @param value
 */
export const DefaultFormatter: InputNumberFormatter = (value: number | string) => {
    if (isEmpy(value)) {
        return "";
    } else {
        return value + "";
    }
};

/**
 * 默认格式化
 * @description 返回对应的反格式化字符串
 * @param value
 */
export const DefaultParser: InputNumberParser = (value: string) => {
    if (value) {
        return value + "";
    } else {
        return "";
    }
};

/**
 * 字符串转换为数值
 * @description 返回undefined则不是数值
 * @param val
 */
function coverNumber(val: string) {
    if (val) {
        const number = parseFloat(val + "");
        if (!isNaN(number)) {
            return number;
        }
    }
}

type UseValueReturn = [(val: number | string) => string, string, React.Dispatch<React.SetStateAction<string>>, (val: string) => void, () => boolean, () => boolean, () => void, () => void];

export default function useValue(props: InputNumberProps): UseValueReturn {
    const { min, max, step = 1, precision, parser = DefaultParser, formatter = DefaultFormatter, onChange } = props;
    // 受控数值
    const isControll = 'value' in props;
    const valueProps = DefineDefaultValue(props, "value", "defaultValue");
    // 输入框里的临时字符串
    const [inputValue, setInputValue] = useState<string>(getFormatterInputValue(valueProps));
    // 记录最后一次输入正确的时间字符串
    const lastRef = useRef(valueProps);

    // 受控时候由外部更新输入框的值
    useEffect(() => {
        if (isControll) {
            setInputValue(getFormatterInputValue(props.value));
        }
    }, [isControll ? props.value : 1]);


    /**
     * 获取当前数值对应的输入框字符串
     * @param val
     */
    function getFormatterInputValue(val: number | string) {
        const numberValue = getParserNumber(val);
        return formatter(isEmpy(numberValue) ? "" : numberValue + "");
    }

    /**
     * 解析为数值字符串
     * @param val
     */
    function getParserNumber(val: number | string) {
        return parser(isEmpy(val) ? "" : val + "");
    }

    /**
     * 改变值
     * @param val
     */
    function changeValue(val: string) {
        if (props.disabled) {
            return;
        }

        let numberValue = coverNumber(coverPrecision(precision, getParserNumber(val)));
        if (numberValue === undefined) {
            numberValue = lastRef.current;
        }

        if (min !== undefined && numberValue < min) {
            numberValue = min;
        }
        if (max !== undefined && numberValue > max) {
            numberValue = max;
        }

        lastRef.current = numberValue;

        if (!isControll || getFormatterInputValue(numberValue) !== val) {
            setInputValue(getFormatterInputValue(numberValue));
        }

        if (onChange) {
            onChange(numberValue);
        }
    }

    /**
     * 是否可以自增
     */
    function canIncrease(getNextValue?: (num: number) => void) {
        const numberValue = coverNumber(getParserNumber(lastRef.current));
        if (numberValue !== undefined) {
            const _step = (max && max - numberValue) < step ? max - numberValue : step;
            const next = (numberValue * FIX_NUMBER + _step * FIX_NUMBER) / FIX_NUMBER;
            if (getNextValue) {
                getNextValue(next);
            }
            return max === undefined || (_step !== 0 && next <= max);
        } else {
            if (getNextValue) {
                getNextValue(min === undefined ? 1 : min);
            }
            return true;
        }
    }

    /**
     * 是否可以自减
     */
    function canDecrease(getNextValue?: (num: number) => void) {
        const numberValue = coverNumber(getParserNumber(lastRef.current));
        if (numberValue !== undefined) {
            const _step = (min && numberValue - min) < step ? numberValue - min : step;
            const next = (numberValue * FIX_NUMBER - _step * FIX_NUMBER) / FIX_NUMBER;
            if (getNextValue) {
                getNextValue(next);
            }
            return min === undefined || (_step !== 0 && next >= min);
        } else {
            if (getNextValue) {
                getNextValue(max === undefined ? 1 : max);
            }
            return true;
        }
    }

    /**
     * 自增值
     */
    function increase() {
        let next: number;
        const getNextValue = (n: number) => {
            next = n;
        };

        if (canIncrease(getNextValue)) {
            changeValue(next + "");
        }
    }

    /**
     * 自减值
     */
    function decrease() {
        let next: number;
        const getNextValue = (n: number) => {
            next = n;
        };

        if (canDecrease(getNextValue)) {
            changeValue(next + "");
        }
    }

    return [getFormatterInputValue, inputValue, setInputValue, changeValue, canIncrease, canDecrease, increase, decrease];
}
