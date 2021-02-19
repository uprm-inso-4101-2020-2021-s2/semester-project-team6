import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

import { cacheConfig } from './cache';

/*
    Apollo client will store and fetch all of the GraphQL queries that are executed.
    Has built in cache and can handle when data is fetched multiple times.

    Useful Links:
    - https://www.youtube.com/watch?v=ou0fEW1eRjc&t=4938s
    - https://www.apollographql.com/docs/react/
 */

const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

export const client = new ApolloClient({
  name: "GraphQL Api",
  version: "v1.0",
  uri: "http://localhost:4000/graphql/",
  cache: new InMemoryCache(cacheConfig),
  link,
});
