const { Middleware } = use('Core/');
const { ApolloServer, gql, PubSub } = use('apollo-server-express');
const { fileLoader, mergeResolvers, mergeTypes } = use('merge-graphql-schemas');
const config = use('Config/Api');
const Security = use('Config/Security');
const csurf = use('csurf');

class Api extends Middleware {
    boot(app) {
        let {server, path} = this._apolloServer()

        // GraphQl API
        // app.use(cors())
        if (config.cors.enabled) {
            // app.options('/api', cors());
            server.applyMiddleware({ app, path, cors: true });
        } else {
            server.applyMiddleware({ app, path });
        }        
    
        // TODO: Fix csurf Plugin
        if(Security.csrf) {
            app.use(csurf());
            app.use((req, res, next) => {
                req._csrf = req.csrfToken();
                next();
            });
        }       
    }
    
    _apolloServer() {
        let self = this;

        // Construct a schema, using GraphQL schema language
        // let typesArray = fileLoader(BASE_PATH+'/plugins/GraphQl/Schema/**/*.graphql');
        // let typesArray = fileLoader(BASE_PATH + '/plugins/**/*.graphql');
        let typesArray = fileLoader(BASE_PATH + '/app/Api/Schema/*.graphql');
        typesArray     = mergeTypes(typesArray, { all: true });

        // Provide resolver functions for your schema fields
        // let resolversArray = fileLoader(BASE_PATH+'/plugins/GraphQl/Resolver/**/*-resolver.js');
        // let resolversArray = fileLoader(BASE_PATH + '/plugins/**/*-resolver.js');
        let resolversArray = fileLoader(BASE_PATH + '/app/Api/Resolver/*.js');
        resolversArray     = mergeResolvers(resolversArray);

        const typeDefs  = gql`${typesArray}`;
        const resolvers = resolversArray;
        
        // TODO: example for subscription
        // https://www.apollographql.com/docs/apollo-server/features/subscriptions
        // const pubsub = new PubSub();

        
        // https://www.apollographql.com/docs/apollo-server/features/metrics
        const server = new ApolloServer({ 
            typeDefs, 
            resolvers,
            context: self._context,
            ...config.options
        });

        return {
            server,
            path: config.path
        };
    }

    // TODO: Implement Authendication
    // https://www.apollographql.com/docs/apollo-server/features/authentication
    _context(obj) {
        // get the user token from the headers
        // const token = req.headers.authorization || '';
       
        // try to retrieve a user with the token
        // const user = getUser(token);
       
        // add the user to the context
        // throw new Error('you must be logged in'); 

        return { };
    }
}

module.exports = Api;