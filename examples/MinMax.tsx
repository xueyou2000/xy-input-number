import React from "react";
import NumberInput from "../src";
import "../src/assets/index";

export default function() {
    return <NumberInput style={{ width: "180px" }} max={15} min={3} />;
}
