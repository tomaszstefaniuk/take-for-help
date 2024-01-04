import { render, screen } from "@testing-library/react";
import React from "react";
import { IconApple } from "..";

test("renders Apple icon", () => {
  render(<IconApple />);
  const appleIcon = screen.getByTestId("apple-icon");

  expect(appleIcon).toBeInTheDocument();
});
