const express = require('express');
const { graphqlHTTP } = require('express-graphql'); // allows express to understand graphql through a middleware
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// allow cross-origin requests
app.use(cors());

// connect with MongoDb database
mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.yake6qy.mongodb.net/?retryWrites=true&w=majority`);
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

// middleware for graphql-express to handle the graphql requests
app.use('/graphql', graphqlHTTP({
  // options: must contain a schema to tell graphql how our data will be organized (our "graphic" schema)
  schema,
  graphiql: true // use graphiql to simulate queries
}));

app.listen(4000, () => {
  console.log('Now listening for requests on port 4000');
});