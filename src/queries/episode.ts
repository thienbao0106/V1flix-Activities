import { gql } from "@apollo/client";

export const GET_JUST_RELEASED = gql`
  {
    episodes {
      episodes {
        series {
          title {
            main_title
          }
          images {
            type
            source
          }
        }
        _id
        epNum
        created_at
      }
    }
  }
`;
