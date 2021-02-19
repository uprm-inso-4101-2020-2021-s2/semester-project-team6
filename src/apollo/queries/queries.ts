/*
  This will be all of the GraphQL calls to ClimatologyPR's Database.
  The data can be used anywhere in the app and will be cached to improve performance and reduce the amount of calls done.
 */

import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: ID!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export const IS_SIGNED_IN = gql`
  query isSignedIn {
    isSignedIn
  }
`;
