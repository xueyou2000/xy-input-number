import React, { useState } from "react";
import NumberInput from "../src";

export default function () {
    const [value, setValue] = useState(10);

    return <NumberInput value={value} onChange={setValue} placeholder="请输入" style={{ width: "180px" }} />;
}
