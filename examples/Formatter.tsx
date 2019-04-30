import React from "react";
import NumberInput from "../src";
import "../src/assets/index";
import { DefaultParser } from "../src/Hooks/useValue";

export default function() {
    return (
        <div>
            <h2>前缀加上美元符号</h2>
            <NumberInput style={{ width: "180px" }} formatter={(value) => `$ ${value || ""}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} parser={(value) => value.replace(/\$\s?|(,*)/g, "")} />

            <h2>后缀加上百分比符号</h2>
            <NumberInput style={{ width: "180px" }} formatter={(value) => `${value}%`} parser={(value) => DefaultParser(value.replace("%", ""))} />
        </div>
    );
}
