import graphqlHTTP from 'express-graphql'
import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLInt } from 'graphql'

import data from './data.json'
import userType from './types/userType.js'
import tagType from './types/tagType.js'

var app = require('express')()

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: function (_, args) {
          return data[args.id]
        }
      }
    }
  })
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))
app.listen(8000)

console.log('GraphQL server running on http://localhost:8000/graphql')
