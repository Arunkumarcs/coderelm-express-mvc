const Middleware = use('Core/Middleware');
const { ApolloServer, gql, PubSub } = use('apollo-server-express');
const { fileLoader, mergeResolvers, mergeTypes } = use('merge-graphql-schemas')

// TODO: Fix csurf Plugin
// const csurf = use('csurf');

// TODO: GraphQl API
// const api = use('Routes/Api');

class Api extends Middleware {
    boot() {
        let app = this.app
        let {server, path} = this._apolloServer()

        // TODO: GraphQl API
        // this.app.use('/api/', api);
        server.applyMiddleware({ app, path });
    
        // TODO: Fix csurf Plugin
        // this.app.use(csurf());        
    }
    
    _apolloServer() {
        // Construct a schema, using GraphQL schema language
        let typesArray = fileLoader(BASE_PATH+'/plugins/GraphQl/Schema/**/*.graphql');
        typesArray = mergeTypes(typesArray, { all: true });
        const typeDefs = gql`${typesArray}`;

        // Provide resolver functions for your schema fields
        let resolversArray = fileLoader(BASE_PATH+'/plugins/GraphQl/Resolver/**/*');
        resolversArray = mergeResolvers(resolversArray);
        const resolvers = resolversArray;
        
        // TODO: example for subscription
        // https://www.apollographql.com/docs/apollo-server/features/subscriptions
        const pubsub = new PubSub();

        // TODO: Implement Authendication
        // https://www.apollographql.com/docs/apollo-server/features/metrics
        // https://www.apollographql.com/docs/apollo-server/features/authentication

        const server = new ApolloServer({ 
            typeDefs, 
            resolvers,

            // https://www.apollographql.com/docs/apollo-server/features/graphql-playground
            // introspection: true,
            playground: {
                settings: {
                  'editor.theme': 'dark',
                }
            }
        });
        const path = '/api';
        return {
            server,
            path
        }
    }
}

module.exports = Api;