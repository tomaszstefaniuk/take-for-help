import { Alert, Box, Divider, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";

import { IconApple, OutlineButton } from "@/components/atoms";
import { FieldError } from "@/types/error";
import { getGoogleUrl } from "@/utils/getGoogleUrl";

type Props = {
  title: string;
  subtitle?: string;
  error?: string | FieldError[];
  successMessage?: string;
  hideSocialButtons?: boolean;
};

export const AuthFormLayout: FC<PropsWithChildren<Props>> = ({
  title,
  subtitle,
  children,
  error,
  successMessage,
  hideSocialButtons,
}: PropsWithChildren<Props>) => {
  const router = useRouter();

  const { pathname } = router;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ width: "100%", maxWidth: "435px" }}
    >
      <Typography variant="h2" color="text.secondary" marginBottom={1.2}>
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          color="text.disabled"
          marginBottom={4.5}
        >
          {subtitle}
        </Typography>
      )}
      {!hideSocialButtons && (
        <>
          <Box
            display="flex"
            gap={1.25}
            marginBottom={4.25}
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            <NextLink href={getGoogleUrl(pathname)}>
              <OutlineButton
                startIcon={
                  <Box
                    component="img"
                    src="/icons/google-icon.svg"
                    height="15px"
                  />
                }
              >
                Sign in with Google
              </OutlineButton>
            </NextLink>
            <OutlineButton
              startIcon={<IconApple />}
              disabled
              title="This feature will be available in the future"
            >
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
        </>
      )}
      {error && (
        <Stack sx={{ width: "100%", my: 3 }}>
          <Alert variant="outlined" severity="error">
            {Array.isArray(error)
              ? error.map((err) => (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    key={`${err.message}$${err.field}`}
                  >
                    -{err.message}.
                  </Typography>
                ))
              : error}
          </Alert>
        </Stack>
      )}
      {successMessage && (
        <Stack sx={{ width: "100%", my: 3 }}>
          <Alert severity="success">{successMessage}</Alert>
        </Stack>
      )}
      {children}
    </Box>
  );
};
