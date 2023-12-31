import { GetServerSideProps } from "next";
import { SignInForm } from "@/components/organisms";
import {
  AuthLayout,
  DashboardLayout,
  DashboardPage,
} from "@/components/templates";
import { withLayout } from "@/hoc";
import { NextPageWithLayout } from "@/types";

type Props = {
  isUserLoggedIn?: boolean;
};

const MainPage: NextPageWithLayout<Props> = ({ isUserLoggedIn }: Props) => {
  const WrappedDashboardPage = withLayout(DashboardPage, DashboardLayout);
  const WrappedSignInForm = withLayout(SignInForm, AuthLayout);

  if (isUserLoggedIn) {
    return <WrappedDashboardPage />;
  } else {
    return <WrappedSignInForm />;
  }
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      isUserLoggedIn: req.cookies.logged_in || false,
    },
  };
};

export default MainPage;
