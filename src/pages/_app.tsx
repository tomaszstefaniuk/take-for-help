import React, { FC } from "react";

import Head from "next/head";
import { AppProps } from "next/app";
import { CleanLayout } from "@/components/templates";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>Take For Help</title>
      </Head>
      <CleanLayout>
        <Component {...pageProps} />
      </CleanLayout>
    </div>
  );
};

export default MyApp;
