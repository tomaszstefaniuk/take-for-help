import { Container } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const CleanLayout: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => {
  return (
    <>
      <Container component="main">{children}</Container>
    </>
  );
};
