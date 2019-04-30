import React, { useState } from "react";
import NumberInput from "../src";
import "../src/assets/index";

export default function() {
    return <NumberInput style={{ width: "180px" }} step={0.33} max={15} min={3} />;
}
