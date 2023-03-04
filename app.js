
import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './src/schema/graphQLSchema.js';


const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});


server.listen({ port: 9000 }).then(({ url }) => console.log(`Server running at ${url}`));
