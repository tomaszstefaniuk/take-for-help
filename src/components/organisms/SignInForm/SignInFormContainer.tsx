import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import validator from "validator";
import * as yup from "yup";
import { getErrors } from "@/helpers/apiHelpers";
import { useLanguage } from "@/language";
import { useLoginUserMutation } from "@/redux/features/auth";
import { LoginUserPayload } from "@/types/auth";
import { SignInFormComponent } from "./SignInFormComponent";

export const SignInFormContainer: FC = () => {
  const { t } = useLanguage();
  const router = useRouter();

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

  const { formState, handleSubmit, register, setError } =
    useForm<LoginUserPayload>({
      mode: "onTouched",
      resolver: yupResolver(schema),
      defaultValues: {
        email: "",
        password: "",
      },
    });

  const [loginUser, { error, isLoading, isSuccess }] = useLoginUserMutation();

  const onSubmit: SubmitHandler<LoginUserPayload> = (data) => {
    loginUser(data);
  };

  useEffect(() => {
    const apiErrors = getErrors(error);

    if (Array.isArray(apiErrors)) {
      apiErrors.map((err) => {
        setError(err.field as keyof LoginUserPayload, {
          type: "manual",
          message: err.message,
        });
      });
    }
  }, [error, setError]);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      router.replace(router.asPath);
    }
  }, [isLoading]);

  return (
    <SignInFormComponent
      onSubmit={onSubmit}
      formState={formState}
      handleSubmit={handleSubmit}
      t={t}
      register={register}
      error={error ? getErrors(error) : undefined}
      isLoading={isLoading}
    />
  );
};
