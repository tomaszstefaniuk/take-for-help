import { FC, MouseEvent, useState } from "react";
import { useLogoutUserMutation } from "@/redux/features/auth";
import { UserMenuComponent } from "./UserMenuComponent";

export const UserMenuContainer: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const onButtonClick = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const [logoutUser] = useLogoutUserMutation();

  const onSignOutButtonClick = () => {
    logoutUser();
  };

  return (
    <UserMenuComponent
      anchorEl={anchorEl}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
      closeMenu={closeMenu}
      onSignOutButtonClick={onSignOutButtonClick}
    />
  );
};
