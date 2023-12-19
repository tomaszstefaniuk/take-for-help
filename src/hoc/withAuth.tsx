import { NextPage } from "next";
import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "@/redux/features/user";

export const withAuth = <P extends Record<string, unknown>>(
  Component: NextPage<P>,
  LayoutComponent?: FC<P & { children?: ReactNode }>
): NextPage<P> => {
  const AuthComponent: NextPage<P> = (props) => {
    const isAuthenticated = useSelector(getIsAuthenticated);

    if (!isAuthenticated) {
      return null;
    }

    return LayoutComponent ? (
      <LayoutComponent {...props}>
        <Component {...props} />
      </LayoutComponent>
    ) : (
      <Component {...props} />
    );
  };

  return AuthComponent;
};
