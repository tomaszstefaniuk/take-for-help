import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { TFunction } from "i18next";

import NextLink from "next/link";
import { FC } from "react";
import {
  UseFormHandleSubmit,
  FormState,
  SubmitHandler,
  UseFormRegister,
  UseFormWatch,
  UseFormTrigger,
} from "react-hook-form";

import { TextField } from "@/components/atoms";

import { PasswordMeterTextField } from "@/components/molecules";
import { AuthFormLayout } from "@/components/templates";
import { FieldError } from "@/types/error";
import { ResetPasswordFormData } from "./ResetPasswordFormContainer";

type Props = {
  onSubmit: SubmitHandler<ResetPasswordFormData>;
  formState: FormState<ResetPasswordFormData>;
  handleSubmit: UseFormHandleSubmit<ResetPasswordFormData>;
  t: TFunction;
  register: UseFormRegister<ResetPasswordFormData>;
  watch: UseFormWatch<ResetPasswordFormData>;
  trigger: UseFormTrigger<ResetPasswordFormData>;
  error?: string | FieldError[];
  isLoading: boolean;
};

export const ResetPasswordFormComponent: FC<Props> = ({
  onSubmit,
  formState,
  handleSubmit,
  t,
  register,
  watch,
  trigger,
  error,
  isLoading,
}) => {
  return (
    <AuthFormLayout
      title="Set new Password"
      subtitle="Please provide a new password."
      hideSocialButtons
      error={error}
    >
      <Box
        component="form"
        width="100%"
        display="flex"
        flexDirection="column"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ maxWidth: { xs: "270px", md: "100%" } }}
      >
        <Box mb={3}>
          <PasswordMeterTextField
            id="password"
            label={t("general.password")}
            {...register("password")}
            value={watch("password")}
            onChange={(e) => {
              const isPasswordConfirmTouched =
                formState.touchedFields?.passwordConfirm;
              register("password").onChange(e);
              if (isPasswordConfirmTouched) {
                trigger("passwordConfirm");
              }
            }}
            isError={formState.errors?.password?.message !== undefined}
            isSuccess={
              formState.touchedFields?.password &&
              formState.errors?.password?.message === undefined
            }
            helperText={formState.errors?.password?.message}
          />
        </Box>
        <Box>
          <TextField
            id="passwordConfirm"
            type="password"
            label={t("general.passwordConfirmation")}
            {...register("passwordConfirm")}
            isError={formState.errors?.passwordConfirm?.message !== undefined}
            isSuccess={
              formState.touchedFields?.passwordConfirm &&
              formState.errors?.passwordConfirm?.message === undefined
            }
            helperText={formState.errors?.passwordConfirm?.message}
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
