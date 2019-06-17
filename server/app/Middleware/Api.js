const { Middleware } = use('Core/');
const { ApolloServer, gql, PubSub } = use('apollo-server-express');
const { fileLoader, mergeResolvers, mergeTypes } = use('merge-graphql-schemas');
const Security = use('Config/Security');
const csurf = use('csurf');

class Api extends Middleware {
    boot(app) {
        let self = this;

        $_.mapKeys(self.services, (value, key) => {
            let {server, path} = self.apolloServer(value)

            // GraphQl API
            server.applyMiddleware({ app, path, cors: value.options.cors });
        })

        if(Security.csrf) {
            app.use(csurf());
            app.use((req, res, next) => {
                req._csrf = req.csrfToken();
                next();
            });
        }
    }

    // Construct a schema, using GraphQL schema language
    // let typesArray = fileLoader(BASE_PATH+'/plugins/GraphQl/Schema/**/*.graphql');
    // let typesArray = fileLoader(BASE_PATH + '/plugins/**/*.graphql');
    typeDefs(path) {
        return mergeTypes(
            fileLoader(path), 
            { all: true }
        );
    }

    // Provide resolver functions for your schema fields
    // let resolversArray = fileLoader(BASE_PATH+'/plugins/GraphQl/Resolver/**/*-resolver.js');
    // let resolversArray = fileLoader(BASE_PATH + '/plugins/**/*-resolver.js');
    resolvers(path) {
        return mergeResolvers(fileLoader(path));
    }
    
    apolloServer(obj) {
        let self = this;

        const typeDefs  = gql`${this.typeDefs(obj.typeDefs)}`;
        const resolvers = this.resolvers(obj.resolvers);
        
        // TODO: example for subscription
        // https://www.apollographql.com/docs/apollo-server/features/subscriptions
        // const pubsub = new PubSub();
        
        // https://www.apollographql.com/docs/apollo-server/features/metrics
        const server = new ApolloServer({ 
            typeDefs, 
            resolvers,
            context: obj.context,
            ...obj.options
        });

        return {
            server,
            path: obj.path
        };
    }
}

// TODO: Implement Authendication
// https://www.apollographql.com/docs/apollo-server/features/authentication
// https://www.apollographql.com/docs/apollo-server/features/errors/
Api.prototype.services = {
    auth: {
        typeDefs: BASE_PATH + '/app/Api/*-auth.graphql',
        resolvers: BASE_PATH + '/app/Api/*-auth.js',
        context: ({ req }) => {
            // get the user token from the headers
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            const privateKey = req.headers.authorization || '';
            const publicKey  = req.headers.public_key || '';

            return {
                req,
                ip,
                privateKey,
                publicKey
            }
        },
        path: "/api/auth",
        options: {
            introspection: true,
            playground: false,
            cors: true
        },
    },
    api: {
        typeDefs: BASE_PATH + '/app/Api/Schema/*.graphql',
        resolvers: BASE_PATH + '/app/Api/Resolver/*.js',
        context: ({req}) => {
            const token = req.headers.authorization || '';
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            // get the user token from the headers
            // const token = req.headers.authorization || '';
           
            // try to retrieve a user with the token
            // const user = getUser(token);
           
            // add the user to the context
            // throw new Error('you must be logged in'); 
            // if(token == "") {
            //     throw new AuthenticationError('Invalid Authorization Token.');
            // } 
            // jwtDec = jwt.decrypt(token, type);

            return { 
                req,
                token,
                ip
            };
        },
        path: "/api",
        options: {
            introspection: true,
            playground: true,
            cors: true
        },
    }
}

module.exports = Api;