var graphql = require('graphql');

const tagType = new graphql.GraphQLObjectType({
  name: 'tag',
  fields: {
    id: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
  }
});

export default tagType;
