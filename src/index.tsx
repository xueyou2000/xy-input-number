import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";
import useValue, { DefaultFormatter, DefaultParser } from './Hooks/useValue';
import { InputNumberProps } from "./interface";

export const InputNumber = React.forwardRef((props: InputNumberProps, ref: React.MutableRefObject<any>) => {
    const { prefixCls = "xy-inputnumber", className, style, defaultValue, onChange, parser = DefaultParser, formatter = DefaultFormatter, precision, min, max, step = 1, onKeyDown, onBlur, ...genericProps } = props;
    const [getFormatterInputValue, inputValue, setInputValue, changeValue, canIncrease, canDecrease, increase, decrease] = useValue(props);
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-disabled`]: props.disabled
    });

    function changeHandle(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(getFormatterInputValue(event.target.value));
    }

    function keyDownHandle(event: React.KeyboardEvent<HTMLInputElement>) {
        if (onKeyDown) {
            onKeyDown(event);
        }

        const input = event.currentTarget;

        switch (event.keyCode) {
            // 回车
            case 13:
                changeValue(input.value);
                event.preventDefault();
                return;
            // 上方向
            case 38:
                increase();
                event.preventDefault();
                return;
            // 下方向
            case 40:
                decrease();
                event.preventDefault();
                return;
        }
    }

    function blurHandle(event: React.FocusEvent<HTMLInputElement>) {
        changeValue(event.target.value);
        if (onBlur) {
            onBlur(event);
        }
    }

    function renderControl() {
        return (
            <div className={`${prefixCls}-control-wrap`}>
                <span className={classNames(`${prefixCls}-control`, "control-up", { disabled: !canIncrease() })} onClick={increase}>
                    <span className={`${prefixCls}-control-inner`}>
                        <FontAwesomeIcon icon={faChevronUp} />
                    </span>
                </span>
                <span className={classNames(`${prefixCls}-control`, "control-down", { disabled: !canDecrease() })} onClick={decrease}>
                    <span className={`${prefixCls}-control-inner`}>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </span>
            </div>
        );
    }

    return (
        <div className={classString} style={style} ref={ref}>
            {renderControl()}
            <input {...genericProps} value={inputValue} autoComplete="off" aria-disabled={props.disabled} onChange={changeHandle} onKeyDown={keyDownHandle} onBlur={blurHandle} className={`${prefixCls}-input`} />
        </div>
    );
});

export default React.memo(InputNumber);
