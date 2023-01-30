import { BookList } from "./components/BookList";
import { ApolloClient, ApolloProvider } from '@apollo/client';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql' // endpoint for requests
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
