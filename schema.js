import { GraphQLSchema, GraphQLObjectType, GraphQLInt } from 'graphql'
import userType from './types/userType.js'

const schema = new GraphQLSchema({
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

export default schema
