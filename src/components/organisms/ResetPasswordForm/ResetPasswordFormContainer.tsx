import { yupResolver } from "@hookform/resolvers/yup";
import Router from "next/router";
import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { getErrors } from "@/helpers/apiHelpers";
import { useLanguage } from "@/language";
import { useResetPasswordMutation } from "@/redux/features/auth";
import { ResetPasswordPayload } from "@/types";
import { ResetPasswordFormComponent } from "./ResetPasswordFormComponent";

export type ResetPasswordFormData = Omit<ResetPasswordPayload, "resetToken">;

export const ResetPasswordFormContainer: FC = () => {
  const { t } = useLanguage();

  const schema = yup.object({
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
  });

  const { formState, handleSubmit, register, watch, trigger, setError } =
    useForm<ResetPasswordFormData>({
      mode: "onTouched",
      resolver: yupResolver(schema),
      defaultValues: {
        password: "",
        passwordConfirm: "",
      },
    });

  const [resetPassword, { data, isSuccess, error, isLoading }] =
    useResetPasswordMutation();

  const onSubmit: SubmitHandler<ResetPasswordFormData> = (data) => {
    resetPassword({ ...data, resetToken: String(Router.query.token) });
  };

  useEffect(() => {
    if (isSuccess) {
      Router.push({
        pathname: "/sign-in",
        query: { successMessage: `${data?.message}. You can log in now.` },
      });
    }
  }, [isSuccess, data?.message]);

  useEffect(() => {
    const apiErrors = getErrors(error);

    if (Array.isArray(apiErrors)) {
      apiErrors.map((err) => {
        setError(err.field as keyof ResetPasswordFormData, {
          type: "manual",
          message: err.message,
        });
      });
    }
  }, [error, setError]);

  return (
    <ResetPasswordFormComponent
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
