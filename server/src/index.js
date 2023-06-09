const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const JokeAPI = require('./datasource');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    jokeAPI: new JokeAPI(),
  }),
  engine: {
    reportSchema: true,
    variant: 'current',
  },
});

server.listen().then(({ url }) => {
  console.log(`🐕 doggo says let's go to ${url}`);
});
