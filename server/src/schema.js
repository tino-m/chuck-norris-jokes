const { gql } = require('apollo-server');

const typeDefs = gql`
  type Categories {
    items: [String!]
    count: Int!
  }
  type Joke {
    categories: [String!]
    created_at: String!
    icon_url: String!
    id: String!
    updated_at: String!
    url: String!
    value: String!
  }

  type Query {
    joke(category: String!): Joke
    categories: Categories
  }
`;

module.exports = typeDefs;
