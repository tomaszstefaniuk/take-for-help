import { Avatar, Box, Button, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  firstName: string;
  avatarImageSrc?: string;
};

export const UserMenuButton: FC<Props> = ({ firstName, avatarImageSrc }) => {
  return (
    <Button
      sx={{
        px: 1.1,
        py: 0.8,
        borderRadius: 1.5,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        marginRight={1}
      >
        <Typography variant="subtitle2" color="text.disabled">
          Hello
        </Typography>
        <Typography variant="body2" color="textSecondary" fontWeight="bold">
          {firstName}
        </Typography>
      </Box>
      <Avatar variant="rounded" src={avatarImageSrc} />
    </Button>
  );
};
