import React, { useState } from "react";
import NumberInput from "../src";

export default function() {
    return <NumberInput style={{ width: "180px" }} precision={3} step={0.001} max={0.03} min={0} />;
}
