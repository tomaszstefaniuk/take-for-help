import { Avatar, Box, Button, Typography, ButtonProps } from "@mui/material";
import { FC } from "react";

type Props = {
  firstName: string;
  avatarImageSrc?: string;
} & ButtonProps;

export const UserMenuButton: FC<Props> = ({
  firstName,
  avatarImageSrc,
  ...rest
}) => {
  return (
    <Button
      sx={{
        px: { xs: 0, md: 1.1 },
        py: { xs: 0, md: 0.8 },
        borderRadius: 1.5,
        minWidth: { xs: "auto", md: "64px" },
      }}
      disableRipple
      {...rest}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        marginRight={1}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Typography variant="subtitle2" color="text.disabled">
          Hello
        </Typography>
        <Typography variant="body2" color="textSecondary" fontWeight="bold">
          {firstName}
        </Typography>
      </Box>
      <Avatar
        variant="rounded"
        src={avatarImageSrc}
        sx={{
          maxWidth: { xs: "30px", md: "40px" },
          maxHeight: { xs: "30px", md: "40px" },
        }}
        data-testid="avatar-image"
      />
    </Button>
  );
};
