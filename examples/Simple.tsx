import React, { useState } from "react";
import NumberInput from "../src";
import { DefaultParser } from "../src/Hooks/useValue";

export default function () {
    const [v, setV] = useState<number>();

    function change(num: number) {
        setV(num);
    }

    return (
        <div>
            <h1>简单演示</h1>
            <NumberInput value={v} onChange={change} placeholder="请输入" style={{ width: "180px" }} />

            <h1>禁用状态</h1>
            <NumberInput placeholder="请输入" style={{ width: "180px" }} disabled={true} />

            <h1>保留精度</h1>
            <p>保留小数点后3位</p>
            <NumberInput style={{ width: "180px" }} precision={3} />

            <h1>最大最小限制</h1>
            <p>最大15, 最小3</p>
            <NumberInput style={{ width: "180px" }} max={15} min={3} />

            <h1>步长</h1>
            <p>步长为 0.33, 最大15, 最小3</p>
            <NumberInput style={{ width: "180px" }} step={0.33} max={15} min={3} />

            <h1>自定义格式化</h1>
            <p>前缀加上美元符号</p>
            <NumberInput style={{ width: "180px" }}
                formatter={value => `$ ${value || ''}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
            />

            <p>后缀加上百分比符号</p>
            <NumberInput style={{ width: "180px" }}
                formatter={value => `${value}%`}
                parser={value => DefaultParser(value.replace('%', ''))}
            />

        </div>
    );
}
