import { Store } from "@reduxjs/toolkit";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { useLogoutUserMutation } from "@/redux/features/auth";
import { UserMenuContainer } from "../UserMenuContainer";

// Mocking useLogoutUserMutation hook
jest.mock("@/redux/features/auth", () => ({
  useLogoutUserMutation: jest.fn(),
}));

describe("UserMenuContainer", () => {
  const mockStore = configureMockStore();
  const store: Store = mockStore({});

  beforeEach(() => {
    (useLogoutUserMutation as jest.Mock).mockClear();
  });

  test("renders UserMenuContainer and triggers logout on button click", async () => {
    const mockedLogoutUser = jest.fn();
    (useLogoutUserMutation as jest.Mock).mockReturnValue([mockedLogoutUser]);

    render(
      <ReduxProvider store={store}>
        <UserMenuContainer />
      </ReduxProvider>
    );

    // Open the user menu
    fireEvent.click(screen.getByTestId("user-menu-button"));

    // Click the sign-out button
    fireEvent.click(screen.getByTestId("sign-out-button"));

    // Ensure that logoutUser was called
    await waitFor(() => {
      expect(mockedLogoutUser).toHaveBeenCalled();
    });
  });
});
