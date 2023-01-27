const express = require('express');
const { graphqlHTTP } = require('express-graphql'); // allows express to understand graphql through a middleware
const schema = require('./schema/schema');

const app = express();

// middleware for graphql-express to handle the graphql requests
app.use('/graphql', graphqlHTTP({
  // options: must contain a schema to tell graphql how our data will be organized (our "graphic" schema)
  schema,
  graphiql: true // use graphiql to simulate queries
}));

app.listen(4000, () => {
  console.log('Now listening for requests on port 4000');
});