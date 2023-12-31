import { SignUpForm } from "@/components/organisms";
import { AuthLayout } from "@/components/templates";
import { NextPageWithLayout } from "@/types";

const SignUpPage: NextPageWithLayout = () => {
  return <SignUpForm />;
};

SignUpPage.Layout = AuthLayout;

export default SignUpPage;
