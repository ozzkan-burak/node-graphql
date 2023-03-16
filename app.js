const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { buildSchema } = require('graphql');

const booksArray = [
  {
    title: "Kitap 1",
    author: "ABC"
  },
  {
    title: "Kitap 2",
    author: "DEF"
  },
]

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
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
  resolvers
});

const startServer = async () => {
  const {} = await startStandaloneServer(server, {
    listen: {
      port: 4000
    }
  })
}
