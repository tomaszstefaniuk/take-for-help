import { FC, PropsWithChildren } from "react";
import { Header } from "@/components/organisms/Header";

export const CleanLayout: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
