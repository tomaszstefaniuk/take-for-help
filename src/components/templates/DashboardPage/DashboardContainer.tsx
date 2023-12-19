import { FC } from "react";
import { PageWithLayout } from "@/types/layout";
import { DashboardComponent } from "./DashboardComponent";

export const DashboardContainer: FC & PageWithLayout = () => {
  return <DashboardComponent />;
};
