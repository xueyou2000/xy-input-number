import React, { useState } from "react";
import NumberInput from "../src";
import { DefaultParser } from "../src/Hooks/useValue";

export default function () {
    const [v, setV] = useState<number>(13);

    function change(num: number) {
        console.log('改变', num);
        setV(num);
    }

    return (
        <div>
            <h1>测试受控</h1>
            <NumberInput value={v} onChange={change} placeholder="请输入" style={{ width: "180px" }} />

            <button onClick={() => change(333)}>设置值为333</button>

        </div>
    );
}
