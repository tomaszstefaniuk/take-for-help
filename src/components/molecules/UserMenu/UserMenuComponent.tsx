import { Box, Menu, MenuItem } from "@mui/material";
import { FC, MouseEvent } from "react";
import { UserMenuButton } from "@/components/atoms";

type Props = {
  anchorEl?: null | HTMLElement;
  isOpen: boolean;
  onButtonClick: (e: MouseEvent<HTMLElement>) => void;
  closeMenu: () => void;
  onSignOutButtonClick: () => void;
};

export const UserMenuComponent: FC<Props> = ({
  anchorEl,
  isOpen,
  onButtonClick,
  closeMenu,
  onSignOutButtonClick,
}) => {
  return (
    <Box>
      <UserMenuButton
        firstName="Richard"
        onClick={onButtonClick}
        data-testid="user-menu-button"
      />
      <Menu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={closeMenu}
        sx={{ marginTop: 2.5 }}
        data-testid="user-menu"
      >
        <MenuItem
          onClick={onSignOutButtonClick}
          disableRipple
          data-testid="sign-out-button"
        >
          Sign out
        </MenuItem>
      </Menu>
    </Box>
  );
};
