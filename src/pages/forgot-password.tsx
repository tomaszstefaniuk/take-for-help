import { ForgotPasswordForm } from "@/components/organisms";
import { AuthLayout } from "@/components/templates";
import { NextPageWithLayout } from "@/types/layout";

const ForgotPasswordPage: NextPageWithLayout = () => {
  return <ForgotPasswordForm />;
};

ForgotPasswordPage.Layout = AuthLayout;

export default ForgotPasswordPage;
