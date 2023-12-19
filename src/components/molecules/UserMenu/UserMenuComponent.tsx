import { Box, Menu, MenuItem } from "@mui/material";
import { FC, MouseEvent } from "react";
import { UserMenuButton } from "@/components/atoms";

type Props = {
  anchorEl: null | HTMLElement;
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
      <UserMenuButton firstName="Richard" onClick={onButtonClick} />
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
      >
        <MenuItem onClick={onSignOutButtonClick} disableRipple>
          Sign out
        </MenuItem>
      </Menu>
    </Box>
  );
};
