import { Box, Button, Typography } from "@mui/material";
import { TFunction } from "i18next";

import { FC } from "react";
import {
  UseFormHandleSubmit,
  FormState,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";

import { TextField, TextLink } from "@/components/atoms";

import { AuthFormLayout } from "@/components/templates";
import { LoginUserPayload } from "@/types/auth";

type Props = {
  onSubmit: SubmitHandler<LoginUserPayload>;
  formState: FormState<LoginUserPayload>;
  handleSubmit: UseFormHandleSubmit<LoginUserPayload>;
  t: TFunction;
  register: UseFormRegister<LoginUserPayload>;
};

export const SignInFormComponent: FC<Props> = ({
  onSubmit,
  formState,
  handleSubmit,
  t,
  register,
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
          <TextField
            id="email"
            label={t("general.email")}
            {...register("email")}
            isError={formState.errors?.email?.message !== undefined}
            isSuccess={
              formState.touchedFields?.email &&
              formState.errors?.email?.message === undefined
            }
            helperText={formState.errors?.email?.message}
          />
        </Box>
        <Box>
          <TextField
            id="password"
            type="password"
            label={t("general.password")}
            {...register("password")}
            isError={formState.errors?.password?.message !== undefined}
            isSuccess={
              formState.touchedFields?.password &&
              formState.errors?.password?.message === undefined
            }
            helperText={formState.errors?.password?.message}
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
            href="/sign-up"
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
