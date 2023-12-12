import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import validator from "validator";
import * as yup from "yup";
import { isErrorWithMessage } from "@/helpers/apiHelpers";
import { useLanguage } from "@/language";
import { useRegisterUserMutation } from "@/redux/features/auth";
import { SignUpFormComponent } from "./SignUpFormComponent";
import { FormData } from "./types";

export const SignUpFormContainer: FC = () => {
  const { t } = useLanguage();

  const router = useRouter();

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

  const { formState, handleSubmit, register, trigger, watch } =
    useForm<FormData>({
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

  const [registerUser, { isLoading, isSuccess, error }] =
    useRegisterUserMutation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    registerUser(data);
  };

  useEffect(() => {
    if (isSuccess) {
      // TODO: Authenticate user
      router.push("/");
    }
  }, [isSuccess, router]);

  return (
    <SignUpFormComponent
      onSubmit={onSubmit}
      formState={formState}
      handleSubmit={handleSubmit}
      t={t}
      register={register}
      watch={watch}
      trigger={trigger}
      error={isErrorWithMessage(error) ? error?.data?.message : undefined}
      isLoading={isLoading}
    />
  );
};
