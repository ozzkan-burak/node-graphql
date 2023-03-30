const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { buildSchema } = require('graphql');

const booksArray = [
  {
    title: "Kitap 1",
    author: "ABC",
    id: 1,
    isActive: false,
    price: 12.77,
    user: {
      id: 1000,
      name: 'Uras',
      surname: 'Özkan'
      }
  },
  {
    title: "Kitap 2",
    author: "DEF",
    id: 2,
    isActive: true,
    price: 16.20,
    user :{
      id: 100,
      name: 'Burak',
      surname: 'Özkan'
    }
  },
]

const usersArray = [
  {
    id: 100,
    name: 'Burak',
    surname: 'Özkan'
  },
  {
    id: 1000,
    name: 'Uras',
    surname: 'Özkan'
  },
  {
    id: 101,
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
    user: User!
  }

  type User {
    name: String!
    surname: String!
    id: Int!
  }

  type Query {
    books: [Book]!
    users: [User]
    user(id: Int): User!
  }
`;

const resolvers = {
  Query: {
    user:(_, args) => {
      console.log(args)
    },
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
