import { resolvers } from './resolvers';

const typeDefs = `
type Conf {
    _id : ID
    name: String!
}
 type Query {
     getConf(_id: ID) : Conf
     getConfs: [Conf]
 }


type Mutation {
    login(email: String!, password: String!): String
}

`
export default {
    typeDefs,
    resolvers
}
