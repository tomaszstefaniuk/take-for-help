import { NextPage } from "next";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

export const withAuth = <P extends Record<string, unknown>>(
  Component: NextPage<P>
): FC<P> => {
  const AuthComponent: NextPage<P> = (props) => {
    const isLoggedIn = false;

    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn) {
        router.push("/sign-in");
      }
    }, [isLoggedIn]);

    return <Component {...props} />;
  };

  return AuthComponent;
};
