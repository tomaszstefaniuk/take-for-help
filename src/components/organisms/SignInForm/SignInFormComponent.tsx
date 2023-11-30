import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import {
  IconApple,
  OutlineButton,
  TextBetweenLines,
  TextButton,
  TextField,
} from "@/components/atoms";
import { useLanguage } from "@/language";
import { FormData } from "./types";

type Props = {
  onSubmit: (data: FormData) => void;
};

export const SignInFormComponent: FC<Props> = ({ onSubmit }) => {
  const { t } = useLanguage();

  const schema = yup.object({
    email: yup
      .string()
      .email()
      .required(
        t("errors.requiredField", {
          fieldName: t("general.email"),
        })
      )
      .test({
        message: () => t("errors.emailWithPlusSign"),
        test: (value = "") => {
          return !value.includes("+");
        },
      })
      .label(t("general.email")),
    password: yup
      .string()
      .required(
        t("errors.requiredField", {
          fieldName: t("general.password"),
        })
      )
      .label(t("general.password")),
  });

  const { control, formState, handleSubmit } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

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
      <TextBetweenLines text="Or with email" />
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
                label={t("general.password")}
                // helperText={fieldState.error?.message}
              />
            )}
          />
        </Box>
        <TextButton lighterOnHover sx={{ alignSelf: "flex-end", marginTop: 1 }}>
          Forgot Password ?
        </TextButton>
        <Button
          variant="contained"
          color="secondary"
          sx={{ my: 3 }}
          type="submit"
          disabled={!formState.isValid}
        >
          Continue
        </Button>
        <Box sx={{ alignSelf: "center", display: "flex", marginTop: 0.75 }}>
          <Typography variant="subtitle1" color="text.disabled">
            Not a Member yet?
          </Typography>
          <TextButton lighterOnHover sx={{ fontSize: "0.875rem" }}>
            Sign up
          </TextButton>
        </Box>
      </Box>
    </Box>
  );
};
