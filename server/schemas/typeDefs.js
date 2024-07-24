const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    # Define other fields as needed
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    # Define other queries as needed
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    # Define other mutations as needed
  }
`;

module.exports = typeDefs;
