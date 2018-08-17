//import mongoose from 'mongoose';
//import schema from './schema';

import { GraphQLServer } from 'graphql-yoga'
//const { GraphQLServer } = require('graphql-yoga')


import graphqlConfig from './schema';

const PORT = 8080;
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/gql_db');

/*
const options  = {
    tracing :true,
    debug: true,
    port: PORT,
    endpoint: '/graphql',
    playground: '/docs'
}
*/

const server = new GraphQLServer(graphqlConfig);

/*
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`
const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
}
const server = new GraphQLServer({ typeDefs, resolvers });
*/

//server.start(options, ({port}) => console.log(`Server is running on localhost:${port}`));

const options = {
  port: 8080,
  endpoint: '/graphql',
//  subscriptions: '/subscriptions',
//  playground: '/playground',
}

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)

