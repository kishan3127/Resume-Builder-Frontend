import {
  from,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

import { getCookie } from "./utils/helper";

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_CLIENT_URL,
});

const authLink = setContext((res, { headers }) => {
  return {
    headers: {
      ...headers,
      // TODO: Update the token values later on
      authorization: "Bareer " + getCookie("token") || null,
    },
  };
});

// const addptor = from([httpLink, errorLink]);
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
