import { useQuery } from "@apollo/client"; // parses GraphQl
import { getBookQuery } from "../queries/queries";

export const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookId }
  });

  // if (loading) return <p>Buscando...</p>;

  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div id='book-details'>
      {bookId !== null ?
        data ? (
          <div>
            <h2>{data.book.name}</h2>
            <p>{data.book.genre}</p>
            <p>{data.book.author.name}</p>
            <p>Outros livros deste autor:</p>
            <ul className="other-books">
              {data.book.author.books.map(book => (
                <li key={book.id}>{book.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div>buscando...</div>
        ) : (
          <p>Nenhum livro selecionado</p>
        )}
    </div>
  );
};
