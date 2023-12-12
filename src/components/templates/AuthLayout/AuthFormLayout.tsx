import { Alert, Box, Divider, Stack, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

import { IconApple, OutlineButton } from "@/components/atoms";

type Props = {
  title: string;
  error?: string;
};

export const AuthFormLayout: FC<PropsWithChildren<Props>> = ({
  title,
  children,
  error,
}: PropsWithChildren<Props>) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h2" color="text.secondary" marginBottom={1.2}>
        {title}
      </Typography>
      <Typography variant="subtitle1" color="text.disabled" marginBottom={4.5}>
        Your Social Campaigns
      </Typography>
      <Box display="flex" gap={1.25} marginBottom={4.25}>
        <OutlineButton
          startIcon={
            <Box component="img" src="/icons/google-icon.svg" height="15px" />
          }
        >
          Sign in with Google
        </OutlineButton>
        <OutlineButton startIcon={<IconApple />}>
          Sign in with Apple
        </OutlineButton>
      </Box>
      <Box width="100%">
        <Divider>
          <Typography
            variant="subtitle2"
            minWidth="max-content"
            marginX={1.5}
            color="text.disabled"
            fontWeight="medium"
          >
            Or with email
          </Typography>
        </Divider>
      </Box>
      {error && (
        <Stack sx={{ width: "100%", marginTop: 5 }} spacing={2}>
          <Alert variant="outlined" severity="error" icon={false}>
            {error}
          </Alert>
        </Stack>
      )}
      {children}
    </Box>
  );
};
