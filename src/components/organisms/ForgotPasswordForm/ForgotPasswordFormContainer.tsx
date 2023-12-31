import { yupResolver } from "@hookform/resolvers/yup";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import validator from "validator";
import * as yup from "yup";
import { getErrors } from "@/helpers/apiHelpers";
import { useLanguage } from "@/language";
import { useForgotPasswordMutation } from "@/redux/features/auth";
import { ForgotPasswordPayload } from "@/types";
import { ForgotPasswordFormComponent } from "./ForgotPasswordFormComponent";

export const ForgotPasswordFormContainer: FC = () => {
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
  });

  const { formState, handleSubmit, register, setError } =
    useForm<ForgotPasswordPayload>({
      mode: "onTouched",
      resolver: yupResolver(schema),
      defaultValues: {
        email: "",
      },
    });

  const [forgotPassword, { data, isLoading, error }] =
    useForgotPasswordMutation();

  const onSubmit: SubmitHandler<ForgotPasswordPayload> = async (data) => {
    try {
      await forgotPassword(data).unwrap();
    } catch (error) {
      const apiErrors = getErrors(
        error as FetchBaseQueryError | SerializedError | undefined
      );

      if (Array.isArray(apiErrors)) {
        apiErrors.map((err) => {
          setError(err.field as keyof ForgotPasswordPayload, {
            type: "manual",
            message: err.message,
          });
        });
      }
    }
  };

  return (
    <ForgotPasswordFormComponent
      onSubmit={onSubmit}
      formState={formState}
      handleSubmit={handleSubmit}
      t={t}
      register={register}
      error={error ? getErrors(error) : undefined}
      successMessage={data?.message}
      isLoading={isLoading}
    />
  );
};
