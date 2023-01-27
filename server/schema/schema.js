// schema to use in the graphqlHTTP middleware
// this schema file has 3 responsibilities: define types, define relationships between types and define root queries
// root queries describe how a user can access and grab data
const graphql = require('graphql');
const _ = require('lodash'); // lodash is a utility lib to deal with arrays, objects, etc in JS

// defining object types
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data
const books = [
  { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
  { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
  { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

// defining root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // get one book
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } }, // should be passed when a book is queried
      resolve(parent, args) {
        // code to get data from db / other source
        return _.find(books, { id: args.id }); // find a book with id 2 inside books array
      }
    }
    // get all books
    // get all authors
    // get one author
  }
});

/* Example of root query from the user:
book(id: '2') {
  name
  genre
}
*/

// exporting the schema to use in app.js
module.exports = new GraphQLSchema({
  query: RootQuery
});