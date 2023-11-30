import { ButtonProps, Button as MuiButton } from "@mui/material";
import { FC } from "react";

export const OutlineButton: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <MuiButton
      variant="outlined"
      sx={{
        paddingX: 3.75,
        paddingY: 1.1,
        border: "1px solid",
        borderColor: "grey.300",
        bgcolor: "white",
        "&:hover": {
          borderColor: "grey.300",
          bgcolor: "grey.100",
          color: "secondary.main",
        },
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};
