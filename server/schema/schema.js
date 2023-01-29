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
  GraphQLList, // list of elements from one specific type
  GraphQLNonNull // for required fields
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
        return Author.findById(parent.authorId);
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
        return Book.find({ authorId: parent.id });
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
        return Book.findById(args.id);
      }
    },
    // get one author
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(authors, { id: args.id }); // find an author with id inside authors array
        return Author.findById(args.id);
      }
    },
    // get all books
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return books;
        return Book.find({});
      }
    },
    // get all authors
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        // return authors;
        return Author.find({});
      }
    }
  }
});

// Mutations are what allow us to change our data. GraphQl needs mutations to be explicitly defined.
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, args) {
        // this Author is mongodb model
        let author = new Author({
          name: args.name,
          age: args.age
        });
        return author.save(); // save is a mongoose method and returns the result of the method
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        // this Book is mongodb model
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId
        });
        return book.save(); // save is a mongoose method and returns the result of the method
      }
    },
  }
});

/* Example of mutation:
    mutation {
      addAuthor(name: "Steven", age: 38) {
        name
        age
      }
    }
*/

// exporting the schema to use in app.js
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation // exporting Mutations
});