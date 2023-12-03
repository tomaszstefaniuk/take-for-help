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
  control: Control<FormData>;
  formState: FormState<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData>;
  t: TFunction;
  onCancelButtonClick: () => void;
};

export const SignUpFormComponent: FC<Props> = ({
  onSubmit,
  control,
  formState,
  handleSubmit,
  t,
  onCancelButtonClick,
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
          <Controller
            control={control}
            name="firstName"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                id="firstName"
                label={t("general.firstName")}
                isError={fieldState?.isTouched && !!fieldState?.error?.message}
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
        <Box mb={3}>
          <Controller
            control={control}
            name="lastName"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                id="lastName"
                label={t("general.lastName")}
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
        <Box mb={3}>
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <PasswordMeterTextField
                {...field}
                id="password"
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
        <Box>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                id="confirmPassword"
                type="password"
                label={t("general.passwordConfirmation")}
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
        <Box mt={1.5} mb={1} display="flex">
          <Controller
            control={control}
            name="acceptTerms"
            defaultValue={false}
            render={({ field }) => (
              <Checkbox {...field} label="I Accept the" sx={{ marginTop: 2 }} />
            )}
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
        <CancelButton onClick={onCancelButtonClick}>Cancel</CancelButton>
      </Box>
    </AuthFormLayout>
  );
};
