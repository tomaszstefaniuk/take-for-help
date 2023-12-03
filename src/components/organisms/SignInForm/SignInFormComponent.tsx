import { Box, Button, Typography } from "@mui/material";
import { TFunction } from "i18next";

import { FC } from "react";
import {
  Controller,
  UseFormHandleSubmit,
  Control,
  FormState,
  SubmitHandler,
} from "react-hook-form";

import { TextField, TextLink } from "@/components/atoms";

import { AuthFormLayout } from "@/components/templates";
import { FormData } from "./types";

type Props = {
  onSubmit: SubmitHandler<FormData>;
  control: Control<FormData>;
  formState: FormState<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData>;
  t: TFunction;
};

export const SignInFormComponent: FC<Props> = ({
  onSubmit,
  control,
  formState,
  handleSubmit,
  t,
}) => {
  return (
    <AuthFormLayout title="Sign In">
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
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                id="email"
                label={t("general.email")}
                isError={fieldState?.isTouched && fieldState?.invalid}
                isSuccess={
                  fieldState?.isTouched &&
                  !fieldState?.invalid &&
                  fieldState?.isDirty
                }
                helperText={fieldState?.error?.message}
              />
            )}
          />
        </Box>
        <Box>
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                id="password"
                type="password"
                label={t("general.password")}
                isError={fieldState?.isTouched && fieldState?.invalid}
                isSuccess={
                  fieldState?.isTouched &&
                  !fieldState?.invalid &&
                  fieldState?.isDirty
                }
                helperText={fieldState?.error?.message}
              />
            )}
          />
        </Box>
        <TextLink
          href="#"
          lighterOnHover
          sx={{ alignSelf: "flex-end", marginTop: 1 }}
        >
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
            href="/auth/sign-up"
            as="/sign-up"
            passHref
            lighterOnHover
            sx={{ fontSize: "0.875rem", marginLeft: 0.5 }}
          >
            Sign up
          </TextLink>
        </Box>
      </Box>
    </AuthFormLayout>
  );
};
