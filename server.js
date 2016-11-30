import graphqlHTTP from 'express-graphql'
import schema from './schema.js'

let app = require('express')()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))
app.listen(2333)

// console.log('GraphQL server running on http://localhost:2333/graphql')
