export type InputNumberFormatter = (value: number | string) => string;
export type InputNumberParser = (value: string) => string;

export interface InputGenericProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * ID
     */
    id?: string;
    /**
     * 同原生input checkbox一样的name
     */
    name?: string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 占位符文本
     */
    placeholder?: string;
    /**
     * 自动焦点
     */
    autoFocus?: boolean;
    /**
     * tabIndex
     */
    tabIndex?: number;
    /**
     * 输入框焦点事件
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * 输入框失去焦点事件
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * 键盘事件
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    /**
     * 开始输入中文
     */
    onCompositionStart?: (e: React.CompositionEvent<HTMLInputElement>) => void;
    /**
     * 输入中文完毕
     */
    onCompositionEnd?: (e: React.CompositionEvent<HTMLInputElement>) => void;
}

export interface InputNumberProps extends InputGenericProps {
    /**
     * 值
     */
    value?: number;
    /**
     * 默认值
     */
    defaultValue?: number;
    /**
     * change回调
     */
    onChange?: (value: number) => void;
    /**
     * 输入框展示值的格式化
     */
    formatter?: InputNumberFormatter;
    /**
     * 从formatter里转换回来, 配合 formatter使用
     */
    parser?: InputNumberParser;
    /**
     * 保留小数点精度
     * @description 为整数, 比如3, 就是保留到小数点3位
     */
    precision?: number;
    /**
     * 最大值
     */
    max?: number;
    /**
     * 最小值
     */
    min?: number;
    /**
     * 步长
     */
    step?: number;
    /**
     * 一直显示控制按钮
     */
    showControl?: boolean;
}
