import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AuthNavigation } from "@/components/templates/AuthNavigation";
import { NotificationProvider } from "@/providers";
import { store, persistor } from "@/store";
import { theme } from "@/styles/theme";
import "../../public/fonts.css";
import { AppWithLayout } from "@/types/layout";

const MyApp = ({ Component, pageProps }: AppProps & AppWithLayout) => {
  const AppLayout = Component.Layout ? Component.Layout : Fragment;

  return (
    <>
      <Head>
        <title>Take For Help123</title>
      </Head>
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <AuthNavigation>
                <NotificationProvider>
                  <AppLayout>
                    <Component {...pageProps} />
                  </AppLayout>
                </NotificationProvider>
              </AuthNavigation>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    </>
  );
};

export default MyApp;
