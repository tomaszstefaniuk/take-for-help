import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { TFunction } from "i18next";

import NextLink from "next/link";
import { FC } from "react";
import {
  UseFormHandleSubmit,
  FormState,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";

import { TextField } from "@/components/atoms";

import { AuthFormLayout } from "@/components/templates";
import { LoginUserPayload } from "@/types/auth";
import { FieldError } from "@/types/error";

type Props = {
  onSubmit: SubmitHandler<LoginUserPayload>;
  formState: FormState<LoginUserPayload>;
  handleSubmit: UseFormHandleSubmit<LoginUserPayload>;
  t: TFunction;
  register: UseFormRegister<LoginUserPayload>;
  error?: string | FieldError[];
  isLoading: boolean;
};

export const SignInFormComponent: FC<Props> = ({
  onSubmit,
  formState,
  handleSubmit,
  t,
  register,
  error,
  isLoading,
}) => {
  return (
    <AuthFormLayout
      title="Sign In"
      subtitle="Your Social Campaigns"
      error={error}
    >
      <Box
        component="form"
        width="100%"
        marginTop={3}
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
        <Typography
          variant="linkTextLight"
          component={NextLink}
          href="/forgot-password"
          sx={{
            marginTop: 1,
          }}
        >
          Forgot Password ?
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ my: 3 }}
          type="submit"
          disabled={!formState.isValid}
        >
          {isLoading ? (
            <>
              Please wait...
              <CircularProgress
                color="inherit"
                size="15px"
                sx={{ position: "absolute", right: "9rem" }}
              />
            </>
          ) : (
            "Continue"
          )}
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
          <Typography
            variant="linkTextLight"
            component={NextLink}
            href="/sign-up"
            sx={{
              fontSize: { xs: "0.8125rem", md: "0.875rem" },
              marginLeft: 0.5,
            }}
          >
            Sign up
          </Typography>
        </Box>
      </Box>
    </AuthFormLayout>
  );
};
