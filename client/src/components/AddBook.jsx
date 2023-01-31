import { useQuery } from "@apollo/client"; // parses GraphQl
import { getAuthorsQuery } from "../queries/queries";

export const AddBook = () => {
  // binding the query to the component
  const { loading, error, data } = useQuery(getAuthorsQuery);

  if (loading) return <p>Carregando autores...</p>;

  if (error) return <p>Erro: {error.message}</p>;

  return (
    <form id="add-book">
      <div className="field">
        <label>Nome do Livro:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Gênero:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Autor:</label>
        <select>
          <option>Selecionar autor</option>
          {!loading && data ? (
            data.authors.map((author) => <option key={author.id}>{author.name}</option>)
          ) : ''}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};
