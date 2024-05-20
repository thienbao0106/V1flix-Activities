import { gql } from "@apollo/client";

export const GET_SERIES = gql`
  {
    series {
      series {
        _id
        title {
          main_title
          alt_title
        }
        images {
          type
          source
        }
        updated_at
        created_at
        view
        avg_score
        description
        genres {
          _id
          name
        }
      }
    }
  }
`;
