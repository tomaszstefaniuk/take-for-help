import { Header } from "@/components/organisms/Header";
import { FC, PropsWithChildren } from "react";

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
