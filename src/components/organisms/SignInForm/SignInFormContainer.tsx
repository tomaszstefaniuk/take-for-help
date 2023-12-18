import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import validator from "validator";
import * as yup from "yup";
import { useLanguage } from "@/language";
import { useLoginUserMutation } from "@/redux/features/auth";
import { LoginUserPayload } from "@/types/auth";
import { SignInFormComponent } from "./SignInFormComponent";

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

  const { formState, handleSubmit, register } = useForm<LoginUserPayload>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loginUser] = useLoginUserMutation();

  const onSubmit: SubmitHandler<LoginUserPayload> = (data) => {
    loginUser(data);
  };

  return (
    <SignInFormComponent
      onSubmit={onSubmit}
      formState={formState}
      handleSubmit={handleSubmit}
      t={t}
      register={register}
    />
  );
};
