var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');
var app = require('express')();

var data = require('./data.json');

import userType from './types/userType.js';
import tagType from './types/tagType.js';

var schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        args: {
          id: { type: graphql.GraphQLInt }
        },
        resolve: function (_, args) {
          return data[args.id];
        }
      }
    }
  })
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.listen(8000);
console.log('GraphQL server running on http://localhost:8000/graphql');
