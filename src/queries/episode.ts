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

export const FIND_EPISODE = gql`
  query FindEpisode($episodeId: String!) {
    findEpisode(episodeId: $episodeId) {
      _id
      title
      epNum
      source {
        _id
        kind
        value
      }
      subtitles {
        lang
        source {
          _id
          kind
          value
        }
        label
      }
    }
  }
`;
