import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql'

const tagType = new GraphQLObjectType({
  name: 'tag',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  },
})

export default tagType
