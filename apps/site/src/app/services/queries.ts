import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query GetProfile($userId: String!) {
    getProfile(userId: $userId) {
      about
      avatarUrl
      subscriptions
      subscribersCount
    }
  }
`;
