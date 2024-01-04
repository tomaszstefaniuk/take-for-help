import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { OutlineButton } from "..";

test("renders OutlineButton with children", () => {
  render(<OutlineButton>Click me</OutlineButton>);
  const buttonElement = screen.getByText(/Click me/i);

  expect(buttonElement).toBeInTheDocument();
});

test("triggers onClick callback when OutlineButton is clicked", () => {
  const onClickMock = jest.fn();
  render(<OutlineButton onClick={onClickMock}>Click me</OutlineButton>);
  const buttonElement = screen.getByText(/Click me/i);

  fireEvent.click(buttonElement);

  expect(onClickMock).toHaveBeenCalled();
});
