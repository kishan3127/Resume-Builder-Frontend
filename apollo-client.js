import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_CLIENT_URL,
});

const authLink = setContext((_, { headers }) => {
console.log(document.cookie['token']);
  return {
    headers: {
      ...headers,
      // TODO: Update the token values later on
      authorization: localStorage.getItem("token") || document.cookie["token"],
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
