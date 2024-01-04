import { fireEvent, render, screen } from "@testing-library/react";
import { UserMenuComponent } from "../UserMenuComponent";

describe("UserMenuComponent", () => {
  it("renders UserMenuComponent with closed menu", () => {
    render(
      <UserMenuComponent
        isOpen={false}
        onButtonClick={jest.fn()}
        closeMenu={jest.fn()}
        onSignOutButtonClick={jest.fn()}
      />
    );

    const userMenuButton = screen.getByTestId("user-menu-button");
    expect(userMenuButton).toBeInTheDocument();

    const menu = screen.queryByRole("menu");
    expect(menu).not.toBeInTheDocument();
  });

  it("calls onSignOutButtonClick when Sign out is clicked", () => {
    const onSignOutButtonClick = jest.fn();
    const anchorEl = document.createElement("div");

    render(
      <UserMenuComponent
        anchorEl={anchorEl}
        isOpen={true}
        onButtonClick={jest.fn()}
        closeMenu={jest.fn()}
        onSignOutButtonClick={onSignOutButtonClick}
      />
    );

    const signOutButton = screen.getByRole("menuitem", { name: /Sign out/i });

    // Click the Sign out button
    fireEvent.click(signOutButton);
    expect(onSignOutButtonClick).toHaveBeenCalled();
  });
});
