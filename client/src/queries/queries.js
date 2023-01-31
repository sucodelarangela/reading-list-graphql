import { gql } from "@apollo/client"; // parses GraphQl

// querying the books
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

// querying the authors
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

export { getBooksQuery, getAuthorsQuery };