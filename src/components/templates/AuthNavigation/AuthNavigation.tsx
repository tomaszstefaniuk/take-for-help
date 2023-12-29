import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { isProtectedRoute } from "@/helpers/isProtectedRoute";
import { getIsAuthenticated } from "@/redux/features/user";
import { useGetMeQuery } from "@/redux/features/user/userApi";

export const AuthNavigation: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const router = useRouter();
  const isAuthenticated = useSelector(getIsAuthenticated);

  const { refetch } = useGetMeQuery(null);

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (
      (!isAuthenticated && isProtectedRoute(router.pathname)) ||
      (isAuthenticated && !isProtectedRoute(router.pathname))
    ) {
      if (router.pathname === "/") {
        router.replace(router.asPath);
      } else {
        router.push("/");
      }
    }
  }, [isAuthenticated]);

  return <>{children}</>;
};
