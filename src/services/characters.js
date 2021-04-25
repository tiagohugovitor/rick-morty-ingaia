import {gql} from '@apollo/client';

const listCharacters = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        type
        origin {
          name 
          type
          dimension
          residents {
            id
          }
        }
        location {
          name 
          type
          dimension
          residents {
            id
          }
        }
        image
      }
    }
  }
`;

export {
  listCharacters,
};
