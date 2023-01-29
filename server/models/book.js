// this is a mongodb model/schema, which defines how the data will be storaged in database. Do not get confused with the graphql schema, qhich determines the "graph" of graphql.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

module.exports = mongoose.model('Book', bookSchema);