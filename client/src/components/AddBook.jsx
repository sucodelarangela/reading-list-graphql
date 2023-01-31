import { useQuery, useMutation } from "@apollo/client"; // parses GraphQl
import { useState } from "react";
import { getBooksQuery, getAuthorsQuery, addBookMutation } from "../queries/queries";

export const AddBook = () => {
  const [book, setBook] = useState({
    name: '',
    genre: '',
    authorId: ''
  });

  // binding the query to the component
  const { data } = useQuery(getAuthorsQuery);

  // binding the mutation to the component
  const [addBook, { loading, error, data: newBook }] = useMutation(addBookMutation);

  if (loading) return <p>Enviando novo livro...</p>;

  if (error) return <p>Erro: {error.message}</p>;

  function handleSubmit(e) {
    e.preventDefault();
    addBook({
      variables: { name: book.name, genre: book.genre, authorId: book.authorId },
      refetchQueries: [{ query: getBooksQuery }]
    });
  }

  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Nome do Livro:</label>
        <input type="text" onChange={(e) => setBook({ ...book, name: e.target.value })} />
      </div>
      <div className="field">
        <label>Gênero:</label>
        <input type="text" onChange={(e) => setBook({ ...book, genre: e.target.value })} />
      </div>
      <div className="field">
        <label>Autor:</label>
        <select onChange={(e) => setBook({ ...book, authorId: e.target.value })}>
          <option>Selecionar autor</option>
          {!loading && data ? (
            data.authors.map((author) => <option key={author.id} value={author.id}>{author.name}</option>)
          ) : ''}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};
