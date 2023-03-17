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

const usersArray = [
  {
    name: 'Burak',
    surname: 'Özkan'
  },
  {
    name: 'Uras',
    surname: 'Özkan'
  },
  {
    name: 'Buse',
    surname: 'Özkan'
  }
]

const typeDefs = `#graphql
  type Book {
    title: String!
    author: String!
    id:Int!
    isActive: Boolean!
    price: Float!
  }

  type User {
    name: String!
    surname: String!
  }

  type Query {
    books: [Book]
    users: [User]
  }
`;

const resolvers = {
  Query: {
    books: ()=> {
      return booksArray;
    },
    users: ()=> {
      return usersArray;
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
