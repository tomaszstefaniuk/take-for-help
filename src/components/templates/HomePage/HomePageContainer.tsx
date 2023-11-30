import { FC } from "react";
import { PageWithLayout } from "@/types/layout";
import { HomePageComponent } from "./HomePageComponent";

export const HomePageContainer: FC & PageWithLayout = () => {
  return <HomePageComponent />;
};
