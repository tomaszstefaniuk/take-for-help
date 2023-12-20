import { FC } from "react";
import { ResetPasswordForm } from "@/components/organisms";
import { AuthLayout } from "@/components/templates";
import { PageWithLayout } from "@/types/layout";

const ResetPasswordPage: FC & PageWithLayout = () => {
  return <ResetPasswordForm />;
};

ResetPasswordPage.Layout = AuthLayout;

export default ResetPasswordPage;
