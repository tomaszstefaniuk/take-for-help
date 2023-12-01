import { FC } from "react";
import { PageWithLayout } from "@/types/layout";
import { AuthPageComponent } from "./AuthPageComponent";

export const AuthPageContainer: FC & PageWithLayout = () => {
  return <AuthPageComponent />;
};
