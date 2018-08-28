import { resolvers } from './resolvers';

const typeDefs = `
type Conf {
    _id : ID
    name: String!
}
type User {
    _id : ID
    full_name: String!
}
type AuthPayload {
    session_key: String
    jwt_token: String
    user: User
}
 type Query {
     getConf(_id: ID) : Conf
     getConfs: [Conf]
 }


type Mutation {
    coms_login(pin: Int!, password: String!): AuthPayload
    login(email: String!, password: String!): String
}

`
export default {
    typeDefs,
    resolvers
}
