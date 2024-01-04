import { render, screen, fireEvent } from "@testing-library/react";
import React, { createRef } from "react";
import { TextField } from "..";

test("renders TextField with label", () => {
  const ref = createRef<HTMLInputElement>();
  render(<TextField id="test" label="Test Label" ref={ref} />);
  const labelElement = screen.getByLabelText(/Test Label/i);
  const inputElement = screen.getByRole("textbox");

  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});

test("applies success styles when isSuccess prop is true", () => {
  const ref = createRef<HTMLInputElement>();
  render(<TextField id="test" label="Test Label" isSuccess ref={ref} />);
  const inputElement = screen.getByRole("textbox");

  const successIcon = screen.getByTestId("success-icon");

  expect(inputElement).toHaveStyle({ borderColor: "success.main" });
  expect(successIcon).toBeInTheDocument();
});

test("triggers onChange callback when input value changes", () => {
  const ref = createRef<HTMLInputElement>();
  const onChangeMock = jest.fn();
  render(
    <TextField id="test" label="Test Label" onChange={onChangeMock} ref={ref} />
  );
  const inputElement: HTMLInputElement = screen.getByRole("textbox");

  fireEvent.change(inputElement, { target: { value: "new value" } });

  expect(onChangeMock).toHaveBeenCalledWith(expect.anything());
  expect(inputElement.value).toBe("new value");
});
