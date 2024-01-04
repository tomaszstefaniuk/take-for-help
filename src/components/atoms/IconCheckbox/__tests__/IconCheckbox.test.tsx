import { render, screen } from "@testing-library/react";
import React from "react";
import { IconCheckbox } from "..";

test("renders Checkbox icon", () => {
  render(<IconCheckbox />);
  const checkboxIcon = screen.getByTestId("checkbox-icon");

  expect(checkboxIcon).toBeInTheDocument();
});
