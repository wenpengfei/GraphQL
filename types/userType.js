import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from 'graphql'
import tagType from './tagType.js'

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    tags: {
      type: new GraphQLList(tagType),
      resolve: function(user) {
        return [
          {id:1, name:"xxxx"},
          {id:2, name:"xxxx"},
          {id:3, name:"xxxx"},
          {id:4, name:"xxxx"},
        ]
      }
    }
  }
})

export default userType
