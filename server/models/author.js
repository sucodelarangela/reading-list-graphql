// this is a mongodb model/schema, which defines how the data will be storaged in database. Do not get confused with the graphql schema, qhich determines the "graph" of graphql.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model('Author', authorSchema);