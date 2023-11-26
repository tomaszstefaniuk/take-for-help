import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { FC } from "react";
import { CleanLayout } from "@/components/templates";
import { theme } from "@/styles/theme";
import "../../public/fonts.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Take For Help</title>
      </Head>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <CleanLayout>
            <Component {...pageProps} />
          </CleanLayout>
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
};

export default MyApp;
