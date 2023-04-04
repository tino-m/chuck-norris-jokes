import { gql } from '@apollo/client';

export const GET_JOKE = gql`
  query GetJoke($category: String!) {
    joke(category: $category) {
      categories
      created_at
      icon_url
      id
      updated_at
      url
      value
    }
  }
`;
