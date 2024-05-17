import { gql } from "@apollo/client";

export const GET_SERIES = gql`
  {
    series {
      series {
        _id
        title {
          main_title
        }
        images {
          type
          source
        }
      }
    }
  }
`;
