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

import {
  CancelButton,
  Checkbox,
  TextField,
  TextLink,
} from "@/components/atoms";

import { PasswordMeterTextField } from "@/components/molecules";
import { AuthFormLayout } from "@/components/templates";
import { RegisterUserPayload } from "@/types";
import { FieldError } from "@/types/error";

type Props = {
  onSubmit: SubmitHandler<RegisterUserPayload>;
  formState: FormState<RegisterUserPayload>;
  handleSubmit: UseFormHandleSubmit<RegisterUserPayload>;
  t: TFunction;
  register: UseFormRegister<RegisterUserPayload>;
  watch: UseFormWatch<RegisterUserPayload>;
  trigger: UseFormTrigger<RegisterUserPayload>;
  error?: string | FieldError[];
  isLoading: boolean;
};

export const SignUpFormComponent: FC<Props> = ({
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
      title="Sign Up"
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
            id="firstName"
            label={t("general.firstName")}
            {...register("firstName")}
            isError={formState.errors?.firstName?.message !== undefined}
            isSuccess={
              formState.touchedFields?.firstName &&
              formState.errors?.firstName?.message === undefined
            }
            helperText={formState.errors?.firstName?.message}
          />
        </Box>
        <Box mb={3}>
          <TextField
            id="lastName"
            label={t("general.lastName")}
            {...register("lastName")}
            isError={formState.errors?.lastName?.message !== undefined}
            isSuccess={
              formState.touchedFields?.lastName &&
              formState.errors?.lastName?.message === undefined
            }
            helperText={formState.errors?.lastName?.message}
          />
        </Box>
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
        <Box mt={1.5} mb={1} display="flex">
          <Checkbox
            {...register("acceptTerms")}
            label="I Accept the"
            sx={{ marginTop: 2 }}
            value={watch("acceptTerms")}
          />
          <TextLink
            href="#"
            lighterOnHover
            sx={{
              fontWeight: "normal",
              marginTop: "1.25px",
              marginLeft: "3px",
            }}
          >
            Terms
          </TextLink>
          <Typography>.</Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          sx={{ my: 2 }}
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
        <NextLink href="/sign-in">
          <CancelButton fullWidth>Cancel</CancelButton>
        </NextLink>
      </Box>
    </AuthFormLayout>
  );
};
