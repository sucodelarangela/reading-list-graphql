import { useQuery } from "@apollo/client"; // parses GraphQl
import { useState } from "react";
import { getBooksQuery } from "../queries/queries";
import { BookDetails } from "./BookDetails";

export const BookList = () => {
  const [bookId, setBookId] = useState(null);

  // binding the query to the component
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Carregando livros...</p>;

  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div>
      <ul id='book-list'>
        {!loading && data ? (
          data.books.map((book) => <li key={book.id} onClick={(e) => setBookId(book.id)}>{book.name}</li>)
        ) : ''}
      </ul>
      <BookDetails bookId={bookId} />
    </div>
  );
};