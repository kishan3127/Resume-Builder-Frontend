import "antd/dist/antd.css";
import "../styles/globals.css";
import { GlobalStyle } from "../styles/global";
import Head from "next/head";

import NProgress from "nprogress";

import type { AppProps } from "next/app";

import { Router } from "next/router";

import "../node_modules/nprogress/nprogress.css";

Router.events.on("routeChangeStart", (_, { shallow }) => {
  if (shallow) return;

  NProgress.configure({ showSpinner: false, parent: "#page-header, body" });
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
