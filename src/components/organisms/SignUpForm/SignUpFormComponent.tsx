import { Box, Button, Typography } from "@mui/material";
import { TFunction } from "i18next";
import NextLink from "next/link";
import { FC } from "react";
import {
  UseFormHandleSubmit,
  FormState,
  SubmitHandler,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

import {
  CancelButton,
  Checkbox,
  TextField,
  TextLink,
} from "@/components/atoms";

import { PasswordMeterTextField } from "@/components/molecules";
import { AuthFormLayout } from "@/components/templates";
import { FormData } from "./types";

type Props = {
  onSubmit: SubmitHandler<FormData>;
  formState: FormState<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData>;
  t: TFunction;
  register: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;
};

export const SignUpFormComponent: FC<Props> = ({
  onSubmit,
  formState,
  handleSubmit,
  t,
  register,
  watch,
}) => {
  return (
    <AuthFormLayout title="Sign Up">
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
            id="confirmPassword"
            type="password"
            label={t("general.passwordConfirmation")}
            {...register("confirmPassword")}
            isError={formState.errors?.confirmPassword?.message !== undefined}
            isSuccess={
              formState.touchedFields?.confirmPassword &&
              formState.errors?.confirmPassword?.message === undefined
            }
            helperText={formState.errors?.confirmPassword?.message}
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
          disabled={!formState.isValid}
        >
          Submit
        </Button>
        <NextLink href="/sign-in">
          <CancelButton fullWidth>Cancel</CancelButton>
        </NextLink>
      </Box>
    </AuthFormLayout>
  );
};
