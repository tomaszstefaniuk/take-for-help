import { render, fireEvent, screen } from "@testing-library/react";
import React, { createRef, forwardRef } from "react";
import { CheckboxComponent } from "../Checkbox";

const ForwardedCheckbox = forwardRef(CheckboxComponent);

test("renders checkbox component with label", () => {
  const ref = createRef<HTMLInputElement>();
  render(<ForwardedCheckbox label="Test Checkbox" value={false} ref={ref} />);
  const checkboxLabel = screen.getByText(/Test Checkbox/i);
  const checkboxInput = screen.getByRole("checkbox");

  expect(checkboxLabel).toBeInTheDocument();
  expect(checkboxInput).toBeInTheDocument();
});

test("calls onChange prop when the checkbox is clicked", () => {
  const ref = createRef<HTMLInputElement>();
  const mockOnChange = jest.fn();
  render(
    <ForwardedCheckbox
      label="Test Checkbox"
      value={false}
      onChange={mockOnChange}
      ref={ref}
    />
  );
  const checkboxInput = screen.getByRole("checkbox");

  fireEvent.click(checkboxInput);

  expect(mockOnChange).toHaveBeenCalled();
});
