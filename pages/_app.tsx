import "antd/dist/antd.css";
import "../styles/globals.css";
import { GlobalStyle } from "../styles/global";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

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
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
