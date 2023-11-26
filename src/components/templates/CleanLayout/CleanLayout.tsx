import { Container } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { Header } from "@/components/organisms";

export const CleanLayout: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => {
  return (
    <>
      <Header />
      <Container component="main">{children}</Container>
    </>
  );
};
