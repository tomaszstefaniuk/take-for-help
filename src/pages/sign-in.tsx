import { FC } from "react";
import { SignInForm } from "@/components/organisms";
import { AuthLayout } from "@/components/templates";
import { PageWithLayout } from "@/types/layout";

const SignInPage: FC & PageWithLayout = () => {
  return <SignInForm />;
};

SignInPage.Layout = AuthLayout;

export default SignInPage;
