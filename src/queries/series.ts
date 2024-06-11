import { gql } from "@apollo/client";

export const GET_SERIES = gql`
  {
    series {
      series {
        _id
        favors
        title {
          main_title
          alt_title
        }
        images {
          type
          source
        }
        total_episodes
        season
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

export const GET_SERIES_BY_TITLE = gql`
  query FindSeries($seriesTitle: String!) {
    findSeriesByName(seriesTitle: $seriesTitle) {
      _id
      type
      favors
      title {
        main_title
        alt_title
      }
      images {
        type
        source
      }
      total_episodes
      episodes {
        title
        description
        _id
        epNum
        created_at
        thumbnail
        view
      }
      season
      duration
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
`;

export const FIND_SERIES_BY_TITLE = gql`
  query FindSeries($keyword: String!) {
    findSeries(title: $keyword, numOfLimit: 0) {
      _id
      type
      title {
        main_title
      }
      season
      total_episodes
      view
      avg_score
      images {
        type
        source
      }
    }
  }
`;
