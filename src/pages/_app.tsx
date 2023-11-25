import React, { FC } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CleanLayout } from "@/components/templates";
import { theme } from "@/styles/theme";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Take For Help</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CleanLayout>
          <Component {...pageProps} />
        </CleanLayout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
