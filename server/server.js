const express = require('express')
const path = require('path')
const sequelize = require('./config/connection')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./schemas/typeDefs')
const { resolvers } = require('./schemas/resolvers')

const app = express()

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await server.start()

  server.applyMiddleware({ app })

  app.use(express.static(path.join(__dirname, '../client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  })

  const PORT = process.env.PORT || 5000

  sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`)
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      )
    })
  })
}

startApolloServer()
