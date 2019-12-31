const FIX_NUMBER = 1000;

/**
 * 提供精确的加法运算
 * @param num1 被加数
 * @param num2 加数
 * @returns 两个参数的和  num1 + num2
 */
export function add(num1: number, num2: number) {
    return (num1 * FIX_NUMBER + num2 * FIX_NUMBER) / FIX_NUMBER;
}

/**
 * 提供精确的减法运算
 * @param num1 被减数
 * @param num2 减数
 * @returns 两个参数的差  num1 - num2
 */
export function sub(num1: number, num2: number) {
    return (num1 * FIX_NUMBER - num2 * FIX_NUMBER) / FIX_NUMBER;
}
