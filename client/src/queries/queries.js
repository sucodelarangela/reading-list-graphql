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

// add a new book
const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export { getBooksQuery, getAuthorsQuery, addBookMutation };