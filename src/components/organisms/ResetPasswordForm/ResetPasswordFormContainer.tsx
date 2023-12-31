import { yupResolver } from "@hookform/resolvers/yup";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useRouter } from "next/router";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { getErrors } from "@/helpers/apiHelpers";
import { useLanguage } from "@/language";
import { useNotification } from "@/providers";
import { NotificationSeverity } from "@/providers/Notification/Notification";
import { useResetPasswordMutation } from "@/redux/features/auth";
import { ResetPasswordPayload } from "@/types";
import { ResetPasswordFormComponent } from "./ResetPasswordFormComponent";

export type ResetPasswordFormData = Omit<ResetPasswordPayload, "resetToken">;

export const ResetPasswordFormContainer: FC = () => {
  const { t } = useLanguage();
  const { showNotification } = useNotification();
  const { push, query } = useRouter();

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

  const [resetPassword, { error, isLoading }] = useResetPasswordMutation();

  const onSubmit: SubmitHandler<ResetPasswordFormData> = async (values) => {
    try {
      const data = await resetPassword({
        ...values,
        resetToken: String(query.token),
      }).unwrap();
      push("/");
      showNotification(
        `${data?.message}. You can log in now.`,
        NotificationSeverity.SUCCESS
      );
    } catch (error) {
      const apiErrors = getErrors(
        error as FetchBaseQueryError | SerializedError | undefined
      );

      if (Array.isArray(apiErrors)) {
        apiErrors.map((err) => {
          setError(err.field as keyof ResetPasswordFormData, {
            type: "manual",
            message: err.message,
          });
        });
      }
    }
  };

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
