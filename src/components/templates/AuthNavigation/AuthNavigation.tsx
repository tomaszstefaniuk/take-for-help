import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "@/redux/features/user";
import { useGetMeQuery } from "@/redux/features/user/userApi";

export const AuthNavigation: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const router = useRouter();

  const { data, isLoading, isSuccess } = useGetMeQuery(null);

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        router.push("/");
      } else {
        router.push("/sign-in");
      }
    }
  }, [isLoading, isAuthenticated]);

  return <>{children}</>;
};
