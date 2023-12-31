import { NextPage } from "next";
import { FC, PropsWithChildren } from "react";

export type PageWithLayout = {
  Layout?: FC<PropsWithChildren<unknown>>;
};

export type AppWithLayout = {
  Component: PageWithLayout;
};

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  Layout?: FC<PropsWithChildren<unknown>>;
};
