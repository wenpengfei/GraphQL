import graphqlHTTP from 'express-graphql'
import schema from './schema.js'
import data from './data.json'

let app = require('express')()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))
app.listen(8000)

console.log('GraphQL server running on http://localhost:8000/graphql')
