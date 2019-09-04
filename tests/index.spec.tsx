import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputNumber from "../src";

describe("InputNumber", () => {
    test("disabled", () => {
        const onChange = jest.fn();
        const wrapper = render(<InputNumber onChange={onChange} placeholder="请输入" disabled={true} />);
        const input = wrapper.getByPlaceholderText("请输入") as HTMLInputElement;

        fireEvent.change(input, { target: { value: "123abc" } });
        fireEvent.keyDown(input, { keyCode: 13 });

        expect(onChange.mock.calls.length).toBe(0);
        expect(input.value).toBe("123abc");
        expect(input.hasAttribute("disabled")).toBeTruthy();
        const inputWrap = wrapper.container.querySelector(".xy-inputnumber");
        expect(inputWrap.classList.contains("xy-inputnumber-disabled")).toBe(true);
    });

    test("value can be null", () => {
        const wrapper = render(<InputNumber value={null} placeholder="请输入" />);
        const input = wrapper.getByPlaceholderText("请输入") as HTMLInputElement;
        expect(input.value).toBe("");
    });

    test("default parser", () => {
        const onChange = jest.fn();
        const onBlur = jest.fn();
        const wrapper = render(<InputNumber placeholder="请输入" onChange={onChange} onBlur={onBlur} />);
        const input = wrapper.getByPlaceholderText("请输入") as HTMLInputElement;
        fireEvent.change(input, { target: { value: "123abc" } });
        fireEvent.blur(input);

        expect(input.value).toBe("123");
        expect(onChange.mock.calls.length).toBe(1);
        expect(onBlur.mock.calls.length).toBe(1);
        expect(onChange.mock.calls[0][0]).toBe(123);

        fireEvent.change(input, { target: { value: "abc123" } });
        fireEvent.keyDown(input, { keyCode: 13 });

        expect(input.value).toBe("123");
        expect(onChange.mock.calls.length).toBe(2);
        expect(onBlur.mock.calls.length).toBe(1);
        expect(onChange.mock.calls[1][0]).toBe(123);
    });

    test("control button", () => {
        const wrapper = render(<InputNumber placeholder="请输入" />);
        const input = wrapper.getByPlaceholderText("请输入") as HTMLInputElement;
        const upButton = wrapper.container.querySelector(".control-up");
        const downButton = wrapper.container.querySelector(".control-down");

        fireEvent.click(upButton);
        expect(input.value).toBe("1");
        fireEvent.click(upButton);
        expect(input.value).toBe("2");

        fireEvent.click(downButton);
        expect(input.value).toBe("1");
        fireEvent.click(downButton);
        expect(input.value).toBe("0");
        fireEvent.click(downButton);
        expect(input.value).toBe("-1");
    });

    test("keyboard control", () => {
        const wrapper = render(<InputNumber placeholder="请输入" />);
        const input = wrapper.getByPlaceholderText("请输入") as HTMLInputElement;

        fireEvent.keyDown(input, { keyCode: 38 });
        expect(input.value).toBe("1");
        fireEvent.keyDown(input, { keyCode: 38 });
        expect(input.value).toBe("2");

        fireEvent.keyDown(input, { keyCode: 40 });
        expect(input.value).toBe("1");
        fireEvent.keyDown(input, { keyCode: 40 });
        expect(input.value).toBe("0");
        fireEvent.keyDown(input, { keyCode: 40 });
        expect(input.value).toBe("-1");
    });

    test("precision", () => {
        const wrapper = render(<InputNumber placeholder="请输入" precision={3} />);
        const input = wrapper.getByPlaceholderText("请输入") as HTMLInputElement;

        fireEvent.change(input, { target: { value: "12asd5.45" } });
        fireEvent.blur(input);
        expect(input.value).toBe("12");

        fireEvent.change(input, { target: { value: "12.4554545" } });
        fireEvent.blur(input);
        expect(input.value).toBe("12.455");
    });

    test("min and max", () => {
        const wrapper = render(<InputNumber placeholder="请输入" min={5} max={15} />);
        const input = wrapper.getByPlaceholderText("请输入") as HTMLInputElement;

        fireEvent.change(input, { target: { value: "3" } });
        fireEvent.blur(input);
        expect(input.value).toBe("5");

        fireEvent.change(input, { target: { value: "16" } });
        fireEvent.blur(input);
        expect(input.value).toBe("15");
    });

    test("step", () => {
        const wrapper = render(<InputNumber placeholder="请输入" step={1.3} min={5} max={15} />);
        const input = wrapper.getByPlaceholderText("请输入") as HTMLInputElement;

        fireEvent.keyDown(input, { keyCode: 38 });
        expect(input.value).toBe("5");

        fireEvent.change(input, { target: { value: "13" } });
        fireEvent.blur(input);
        fireEvent.keyDown(input, { keyCode: 38 });
        expect(input.value).toBe("14.3");

        fireEvent.keyDown(input, { keyCode: 38 });
        expect(input.value).toBe("15");
    });

    test("customize formater/parser", () => {
        const fn = jest.fn();
        const wrapper = render(
            <InputNumber
                onChange={fn}
                placeholder="请输入"
                formatter={(value) => `$ ${value || ""}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />,
        );
        const input = wrapper.getByPlaceholderText("请输入") as HTMLInputElement;

        fireEvent.change(input, { target: { value: "16" } });
        expect(input.value).toBe("$ 16");

        fireEvent.change(input, { target: { value: "16asb" } });
        expect(input.value).toBe("$ 16asb");

        fireEvent.blur(input);
        expect(fn.mock.calls.length).toBe(1);
        expect(fn.mock.calls[0][0]).toBe(16);
    });
});
