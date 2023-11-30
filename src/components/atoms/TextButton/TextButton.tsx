import { ButtonProps, Button as MuiButton } from "@mui/material";
import { FC } from "react";

type Props = ButtonProps & {
  lighterOnHover?: boolean;
};

export const TextButton: FC<Props> = ({
  lighterOnHover,
  children,
  sx,
  ...rest
}) => {
  return (
    <MuiButton
      color="secondary"
      sx={{
        fontSize: "0.815rem", //13px
        bgcolor: "white",
        padding: 0,
        "&:hover": {
          bgcolor: "unset",
          color: lighterOnHover ? "secondary" : "secondary.dark",
          opacity: lighterOnHover ? 0.8 : 1,
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};
