import { render, screen } from "@testing-library/react";
import React from "react";
import { UserMenuButton } from "..";

test("renders UserMenuButton with first name and avatar", () => {
  render(
    <UserMenuButton firstName="John" avatarImageSrc="path-to-avatar.jpg" />
  );
  const helloText = screen.getByText(/Hello/i);
  const firstNameText = screen.getByText(/John/i);
  const avatarImage = screen.getByTestId("avatar-image");

  expect(helloText).toBeInTheDocument();
  expect(firstNameText).toBeInTheDocument();
  expect(avatarImage).toBeInTheDocument();
});
