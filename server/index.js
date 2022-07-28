const { ApolloServer, gql } = require('apollo-server');
const { posts } = require('./posts');
const { todos } = require('./todos');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Post {
    id: Int
    title: String
    body: String
  }

  type Todo {
    id: Int
    title: String
    completed: Boolean
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    posts: [Post]
    post(id: ID!): Post
    todos: [Todo]
    todo(id: ID!): Todo
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        posts: () => posts,
        todos: () => todos,
        post (parent, args, context, info) {
            const { id } = args;
            return posts.find((post) => post.id == parseInt(id));
            // return context.db.Todo.find((a) => a.id == id);
        },
        todo (parent, args, context, info) {
            const { id } = args;
            return todos.find((todo) => todo.id == parseInt(id));
        },
    },
    // Mutation: {
    //     login: async (_, { email }, { dataSources }) => {
    //         const user = await dataSources.userAPI.findOrCreateUser({ email });
    //         if (user) {
    //             user.token = Buffer.from(email).toString('base64');
    //             return user;
    //         }
    //     },
    //     addNewPost: (_, {title, body}, { dataSources }) => {
    //         console.log('going to add new post');
    //         console.log(title);
    //         console.log(body);
    //         return;
    //     }
    // },
};

const {
    ApolloServerPluginLandingPageLocalDefault
  } = require('apollo-server-core');
  
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    /**
     * What's up with this embed: true option?
     * These are our recommended settings for using AS;
     * they aren't the defaults in AS3 for backwards-compatibility reasons but
     * will be the defaults in AS4. For production environments, use
     * ApolloServerPluginLandingPageProductionDefault instead.
    **/
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });