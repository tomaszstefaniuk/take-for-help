import { Typography, SxProps } from "@mui/material";
import NextLink, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

type Props = LinkProps & {
  lighterOnHover?: boolean;
  children: ReactNode;
  sx?: SxProps;
};

export const TextLink: FC<Props> = ({
  lighterOnHover,
  children,
  sx,
  ...rest
}) => {
  return (
    <NextLink {...rest}>
      <Typography
        color="secondary"
        sx={{
          cursor: "pointer",
          textDecoration: "none",
          fontSize: { xs: "0.75rem", md: "0.815rem" }, //xs: 12px, md: 13px
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
      >
        {children}
      </Typography>
    </NextLink>
  );
};
