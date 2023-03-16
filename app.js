const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { buildSchema } = require('graphql');

const booksArray = [
  {
    title: "Kitap 1",
    author: "ABC",
    id: 1,
    isActive: false,
    price: 12.77
  },
  {
    title: "Kitap 2",
    author: "DEF",
    id: 2,
    isActive: true,
    price: 16.20
  },
]

const typeDefs = `#graphql
  type Book {
    title: String!
    author: String!
    id:Int!
    isActive: BooLean!
    price: Float!
  }


  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: ()=> {
      return booksArray;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  const {} = await startStandaloneServer(server, {
    listen: {
      port: 4000
    }
  })
}

startServer();
