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
import { ForgotPasswordPayload } from "@/types/auth";
import { FieldError } from "@/types/error";

type Props = {
  onSubmit: SubmitHandler<ForgotPasswordPayload>;
  formState: FormState<ForgotPasswordPayload>;
  handleSubmit: UseFormHandleSubmit<ForgotPasswordPayload>;
  t: TFunction;
  register: UseFormRegister<ForgotPasswordPayload>;
  error?: string | FieldError[];
  successMessage?: string;
  isLoading: boolean;
};

export const ForgotPasswordFormComponent: FC<Props> = ({
  onSubmit,
  formState,
  handleSubmit,
  t,
  register,
  error,
  successMessage,
  isLoading,
}) => {
  return (
    <AuthFormLayout
      title="Forgot Password ?"
      subtitle="Enter your email to reset your password."
      hideSocialButtons
      error={error}
      successMessage={successMessage}
    >
      <Box
        component="form"
        width="100%"
        display="flex"
        flexDirection="column"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ maxWidth: { xs: "270px", md: "100%" } }}
      >
        <Box>
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
        <Box display="flex" justifyContent="center" gap="0.75rem" mt={3}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            disabled={!formState.isValid || isLoading}
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
              "Submit"
            )}
          </Button>
          <Typography variant="linkContained" component={NextLink} href="/">
            Cancel
          </Typography>
        </Box>
      </Box>
    </AuthFormLayout>
  );
};
