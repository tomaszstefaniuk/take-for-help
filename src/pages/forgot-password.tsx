import { FC } from "react";
import { ForgotPasswordForm } from "@/components/organisms";
import { AuthLayout } from "@/components/templates";
import { PageWithLayout } from "@/types/layout";

const ForgotPasswordPage: FC & PageWithLayout = () => {
  return <ForgotPasswordForm />;
};

ForgotPasswordPage.Layout = AuthLayout;

export default ForgotPasswordPage;
