import { ResetPasswordForm } from "@/components/organisms";
import { AuthLayout } from "@/components/templates";
import { NextPageWithLayout } from "@/types/layout";

const ResetPasswordPage: NextPageWithLayout = () => {
  return <ResetPasswordForm />;
};

ResetPasswordPage.Layout = AuthLayout;

export default ResetPasswordPage;
