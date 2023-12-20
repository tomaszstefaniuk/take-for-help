import { ButtonProps, Button as MuiButton } from "@mui/material";
import { FC, HTMLAttributes, ReactNode } from "react";

export enum ButtonColor {
  BLUE = "blue",
  GREY = "grey",
}

type Props = {
  color?: ButtonColor;
  children?: ReactNode;
} & Omit<ButtonProps, keyof HTMLAttributes<HTMLButtonElement>>;

export const CancelButton: FC<Props> = ({
  color: propsColor = ButtonColor.BLUE,
  children,
  sx,
  ...rest
}) => {
  let color = "secondary.main";
  let bgcolor = "secondary.light";
  let hoverColor = "white";
  let hoverBgcolor = "secondary.main";

  if (propsColor === ButtonColor.GREY) {
    color = "grey.800";
    bgcolor = "grey.100";
    hoverColor = "grey.800";
    hoverBgcolor = "#fcfcfc";
  }

  return (
    <MuiButton
      variant="contained"
      disableElevation
      sx={{
        color,
        bgcolor,
        "&:hover": {
          color: hoverColor,
          bgcolor: hoverBgcolor,
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};
