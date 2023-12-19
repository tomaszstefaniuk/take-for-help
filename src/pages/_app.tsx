import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { FC, Fragment } from "react";
import { Provider } from "react-redux";
import { AuthNavigation } from "@/components/templates/AuthNavigation";
import store from "@/store";
import { theme } from "@/styles/theme";
import "../../public/fonts.css";
import { AppWithLayout } from "@/types/layout";

const MyApp: FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps & AppWithLayout) => {
  const AppLayout = Component.Layout ? Component.Layout : Fragment;

  return (
    <>
      <Head>
        <title>Take For Help</title>
      </Head>
      <React.StrictMode>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthNavigation>
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            </AuthNavigation>
          </ThemeProvider>
        </Provider>
      </React.StrictMode>
    </>
  );
};

export default MyApp;
