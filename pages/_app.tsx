import "@fortawesome/fontawesome-free/scss/brands.scss";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/regular.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";

import "@fullcalendar/common/main.min.css";
import "@fullcalendar/daygrid/main.min.css";

import { AppProps } from "next/dist/next-server/lib/router/router";
import { AppContextType } from "next/dist/next-server/lib/utils";

import Head from "next/head";
import React from "react";

import "../assets/scss/nextjs-argon-dashboard-pro.scss";
import "../assets/vendor/nucleo/css/nucleo.css";

function NextApp({ Component, pageProps }: AppProps) {
  const PageLayout =
    (Component as any).pageLayout ?? (({ children }) => <>{children}</>);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>NextJS Argon Dashboard by Creative Tim</title>
      </Head>

      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </React.Fragment>
  );
}

NextApp.getInitialProps = async ({
  Component,
  ctx: pageCtx,
}: AppContextType) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(pageCtx);
  }

  return { pageProps };
};

export default NextApp;
