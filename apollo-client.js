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
      authorization: "Bearer " + getCookie("token") || null,
    },
  };
});

// const addptor = from([httpLink, errorLink]);
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false,
  }),
  onError: ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        // handle errors differently based on its error code
        switch (err.extensions.code) {
          case "UNAUTHENTICATED":
            // old token has expired throwing AuthenticationError,
            // one way to handle is to obtain a new token and
            // add it to the operation context
            const headers = operation.getContext().headers;
            operation.setContext({
              headers: {
                ...headers,
                authorization: getNewToken(),
              },
            });
            // Now, pass the modified operation to the next link
            // in the chain. This effectively intercepts the old
            // failed request, and retries it with a new token
            return forward(operation);

          // handle other errors
          case "ANOTHER_ERROR_CODE":
          // ...
        }
      }
    }
  },
});

export default client;
