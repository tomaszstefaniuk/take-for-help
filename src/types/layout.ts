import { FC, PropsWithChildren } from "react";

export type PageWithLayout = {
  Layout?: FC<PropsWithChildren<unknown>>;
};

export type AppWithLayout = {
  Component: PageWithLayout;
};
