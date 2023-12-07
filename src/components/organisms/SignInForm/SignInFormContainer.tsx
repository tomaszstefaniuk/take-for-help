import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import validator from "validator";
import * as yup from "yup";
import { useLanguage } from "@/language";
import { SignInFormComponent } from "./SignInFormComponent";
import { FormData } from "./types";

export const SignInFormContainer: FC = () => {
  const { t } = useLanguage();

  const schema = yup.object({
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
  });

  const { control, formState, handleSubmit } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <SignInFormComponent
      onSubmit={onSubmit}
      control={control}
      formState={formState}
      handleSubmit={handleSubmit}
      t={t}
    />
  );
};
