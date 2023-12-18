import { NextPage } from "next";
import { FC } from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "@/redux/features/user";

export const withAuth = <P extends Record<string, unknown>>(
  Component: NextPage<P>
): FC<P> => {
  const AuthComponent: NextPage<P> = (props) => {
    const isAuthenticated = useSelector(getIsAuthenticated);

    return isAuthenticated && <Component {...props} />;
  };

  return AuthComponent;
};
