import React from "react";
import NumberInput from "../src";

export default function() {
    return <NumberInput showControl={true} style={{ width: "180px" }} max={15} min={3} />;
}
