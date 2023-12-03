import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import validator from "validator";
import * as yup from "yup";
import { useLanguage } from "@/language";
import { SignUpFormComponent } from "./SignUpFormComponent";
import { FormData } from "./types";

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
      .max(
        30,
        t("errors.maxAmountOfCharacters", {
          fieldName: t("general.password"),
          number: 30,
        })
      )
      .required(
        t("errors.requiredField", {
          fieldName: t("general.password"),
        })
      )
      .label(t("general.password")),
    confirmPassword: yup
      .string()
      .max(
        30,
        t("errors.maxAmountOfCharacters", {
          fieldName: t("general.confirmPassword"),
          number: 30,
        })
      )
      .required(
        t("errors.requiredField", {
          fieldName: t("general.confirmPassword"),
        })
      )
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required")
      .label(t("general.confirmPassword")),
    acceptTerms: yup
      .boolean()
      .required("You must accept the terms")
      .oneOf([true], "You must accept the terms"),
  });

  const { control, formState, handleSubmit } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  const onCancelButtonClick = () => {
    router.push("/sign-in");
  };

  return (
    <SignUpFormComponent
      onSubmit={onSubmit}
      control={control}
      formState={formState}
      handleSubmit={handleSubmit}
      t={t}
      onCancelButtonClick={onCancelButtonClick}
    />
  );
};
