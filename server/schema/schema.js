// schema to use in the graphqlHTTP middleware
// this schema file has 3 responsibilities: define types, define relationships between types and define root queries
// root queries describe how a user can access and grab data
const graphql = require('graphql');
const _ = require('lodash'); // lodash is a utility lib to deal with arrays, objects, etc in JS
const Book = require('../models/book');
const Author = require('../models/author');

// defining object types
const {
  GraphQLObjectType, // creates Object Types
  GraphQLString, // type String
  GraphQLID, // type ID
  GraphQLSchema, // creates a new schema
  GraphQLInt, // type Integer
  GraphQLList // list of elements from one specific type
} = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        // relate the book to an author
        // return _.find(authors, { id: parent.authorId });
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType), // not ony a BookType, but a list of BookTypes (for we have many books)
      resolve(parent, args) {
        // relate the author to a list of books
        // return _.filter(books, { authorId: parent.id });
      }
    }
  })
});

// defining root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // get one book
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } }, // should be passed when a book is queried
      resolve(parent, args) {
        // code to get data from db / other source
        // return _.find(books, { id: args.id }); // find a book with id 2 inside books array
      }
    },
    // get one author
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(authors, { id: args.id }); // find an author with id inside authors array
      }
    },
    // get all books
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return books;
      }
    },
    // get all authors
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        // return authors;
      }
    }
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