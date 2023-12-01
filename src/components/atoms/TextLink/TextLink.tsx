import { Link as MuiLink, LinkProps } from "@mui/material";
import { FC } from "react";

type Props = LinkProps & {
  lighterOnHover?: boolean;
};

export const TextLink: FC<Props> = ({
  lighterOnHover,
  children,
  sx,
  ...rest
}) => {
  return (
    <MuiLink
      color="secondary"
      sx={{
        cursor: "pointer",
        textDecoration: "none",
        fontSize: "0.815rem", //13px
        fontWeight: "medium",
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
    </MuiLink>
  );
};
