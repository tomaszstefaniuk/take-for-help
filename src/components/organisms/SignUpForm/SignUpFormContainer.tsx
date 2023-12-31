import { yupResolver } from "@hookform/resolvers/yup";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import validator from "validator";
import * as yup from "yup";
import { getErrors } from "@/helpers/apiHelpers";
import { useLanguage } from "@/language";
import { useRegisterUserMutation } from "@/redux/features/auth";
import { RegisterUserPayload } from "@/types";
import { SignUpFormComponent } from "./SignUpFormComponent";

export const SignUpFormContainer: FC = () => {
  const { t } = useLanguage();

  const schema = yup.object({
    firstName: yup
      .string()
      .max(
        30,
        t("errors.maxAmountOfCharacters", {
          fieldName: t("general.firstName"),
          number: 30,
        })
      )
      .required(
        t("errors.requiredField", {
          fieldName: t("general.firstName"),
        })
      )
      .label(t("general.firstName")),
    lastName: yup
      .string()
      .max(
        30,
        t("errors.maxAmountOfCharacters", {
          fieldName: t("general.lastName"),
          number: 30,
        })
      )
      .required(
        t("errors.requiredField", {
          fieldName: t("general.lastName"),
        })
      )
      .label(t("general.lastName")),
    email: yup
      .string()
      .test("valid-email", "Invalid email address", (value) =>
        validator.isEmail(String(value))
      )
      .required(
        t("errors.requiredField", {
          fieldName: t("general.email"),
        })
      )
      .label(t("general.email")),
    password: yup
      .string()
      .min(
        8,
        t("errors.minAmountOfCharacters", {
          fieldName: t("general.password"),
          number: 8,
        })
      )
      .max(
        100,
        t("errors.maxAmountOfCharacters", {
          fieldName: t("general.password"),
          number: 100,
        })
      )
      .matches(
        /\d/,
        t("errors.atLeastOneNumber", {
          fieldName: t("general.password"),
        })
      )
      .required(
        t("errors.requiredField", {
          fieldName: t("general.password"),
        })
      )
      .label(t("general.password")),
    passwordConfirm: yup
      .string()
      .max(
        100,
        t("errors.maxAmountOfCharacters", {
          fieldName: t("general.passwordConfirm"),
          number: 100,
        })
      )
      .required(
        t("errors.requiredField", {
          fieldName: t("general.passwordConfirm"),
        })
      )
      .oneOf([yup.ref("password")], "Passwords must match")
      .label(t("general.passwordConfirm")),
    acceptTerms: yup
      .boolean()
      .required("You must accept the terms")
      .oneOf([true], "You must accept the terms"),
  });

  const { formState, handleSubmit, register, trigger, watch, setError } =
    useForm<RegisterUserPayload>({
      mode: "onTouched",
      resolver: yupResolver(schema),
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        acceptTerms: false,
      },
    });

  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

  const onSubmit: SubmitHandler<RegisterUserPayload> = async (data) => {
    try {
      await registerUser(data).unwrap();
    } catch (error) {
      const apiErrors = getErrors(
        error as FetchBaseQueryError | SerializedError | undefined
      );

      if (Array.isArray(apiErrors)) {
        apiErrors.map((err) => {
          setError(err.field as keyof RegisterUserPayload, {
            type: "manual",
            message: err.message,
          });
        });
      }
    }
  };

  return (
    <SignUpFormComponent
      onSubmit={onSubmit}
      formState={formState}
      handleSubmit={handleSubmit}
      t={t}
      register={register}
      watch={watch}
      trigger={trigger}
      error={error ? getErrors(error) : undefined}
      isLoading={isLoading}
    />
  );
};
