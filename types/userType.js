var graphql = require('graphql');
import tagType from './tagType.js';
const userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
    tags: {
      type: new graphql.GraphQLList(tagType),
      resolve: function(user) {
        console.log('user', user)
        return [
          {id:1, name:"xxx===x"},
          {id:2, name:"xxxx"},
          {id:3, name:"xxxx"},
          {id:4, name:"xxxx"},
        ]
      }
    }
  }
});
export default userType;
