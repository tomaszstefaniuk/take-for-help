import { ButtonProps, Button as MuiButton } from "@mui/material";
import { FC } from "react";

export const CancelButton: FC<ButtonProps> = ({ children, sx, ...rest }) => {
  return (
    <MuiButton
      variant="contained"
      disableElevation
      sx={{
        color: "secondary.main",
        bgcolor: "secondary.light",
        "&:hover": {
          color: "white",
          bgcolor: "secondary.main",
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};
