import { useQuery } from "@apollo/client"; // parses GraphQl
import { getBooksQuery } from "../queries/queries";

export const BookList = () => {
  // binding the query to the component
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Carregando livros...</p>;

  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div>
      <ul id='book-list'>
        {!loading && data ? (
          data.books.map((book) => <li key={book.id}>{book.name}</li>)
        ) : ''}
      </ul>
    </div>
  );
};