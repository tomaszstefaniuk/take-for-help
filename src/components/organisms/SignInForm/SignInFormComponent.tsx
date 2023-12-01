import { Box, Button, Divider, Typography } from "@mui/material";
import { TFunction } from "i18next";
import { FC } from "react";
import {
  Controller,
  UseFormHandleSubmit,
  Control,
  FormState,
  SubmitHandler,
} from "react-hook-form";

import {
  IconApple,
  OutlineButton,
  TextField,
  TextLink,
} from "@/components/atoms";

import { FormData } from "./types";

type Props = {
  onSubmit: SubmitHandler<FormData>;
  control: Control<FormData, unknown>;
  formState: FormState<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData, undefined>;
  t: TFunction<"translation", undefined>;
};

export const SignInFormComponent: FC<Props> = ({
  onSubmit,
  control,
  formState,
  handleSubmit,
  t,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h2" color="text.secondary" marginBottom={1.2}>
        Sign In
      </Typography>
      <Typography variant="subtitle1" color="text.disabled" marginBottom={4.5}>
        Your Social Campaigns
      </Typography>
      <Box display="flex" gap={1.25} marginBottom={4.25}>
        <Box>
          <OutlineButton
            startIcon={
              <Box component="img" src="/icons/google-icon.svg" height="15px" />
            }
          >
            Sign in with Google
          </OutlineButton>
        </Box>
        <Box>
          <OutlineButton startIcon={<IconApple />}>
            Sign in with Apple
          </OutlineButton>
        </Box>
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
      <Box
        component="form"
        width="100%"
        marginTop={4.25}
        display="flex"
        flexDirection="column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box mb={3}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                {...field}
                id="email"
                label={t("general.email")}
                // helperText={fieldState.error?.message}
              />
            )}
          />
        </Box>
        <Box>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                {...field}
                id="password"
                type="password"
                label={t("general.password")}
                // helperText={fieldState.error?.message}
              />
            )}
          />
        </Box>
        <TextLink lighterOnHover sx={{ alignSelf: "flex-end", marginTop: 1 }}>
          Forgot Password ?
        </TextLink>
        <Button
          variant="contained"
          color="secondary"
          sx={{ my: 3 }}
          type="submit"
          disabled={!formState.isValid}
        >
          Continue
        </Button>
        <Box
          sx={{
            alignSelf: "center",
            display: "flex",
            alignItems: "center",
            marginTop: 0.75,
          }}
        >
          <Typography variant="subtitle1" color="text.disabled">
            Not a Member yet?
          </Typography>
          <TextLink
            lighterOnHover
            sx={{ fontSize: "0.875rem", marginLeft: 0.5 }}
          >
            Sign up
          </TextLink>
        </Box>
      </Box>
    </Box>
  );
};
