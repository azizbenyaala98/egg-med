import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
    {
        getProducts {
      id
      title
      description
      price
      image
    }
  }
`;