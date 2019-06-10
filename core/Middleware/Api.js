const { Middleware } = use('Core/');
// const { ApolloServer, gql, PubSub } = use('apollo-server-express');
const { fileLoader, mergeResolvers, mergeTypes } = use('merge-graphql-schemas');
const cors = use('cors');
const config = use('Config/Api');
const graphqlHTTP = use('express-graphql');
const { buildSchema } = use('graphql');

// TODO: Fix csurf Plugin
// const csurf = use('csurf');

class Api extends Middleware {
    boot(app) {
        // Construct a schema, using GraphQL schema language
        let schema = this.graphSchema();

        // The root provides a resolver function for each API endpoint
        let rootValue = this.graphResolver();

        // https://www.npmjs.com/package/express-graphql
        this.graphServer(
            app,
            schema,
            rootValue
        );
    }

    // Auth Middleware
    graphAuth(req, res, next) {
        next();
    }

    // https://www.npmjs.com/package/express-graphql
    graphServer(
        app,
        schema,
        rootValue
    ) {
        let graphHttp = graphqlHTTP({
            schema,
            rootValue,
            ...config.options,
        });

        if (config.cors.enabled) {
            app.use(config.path, cors(), this.graphAuth, graphHttp);
        } else {
            app.use(config.path, this.graphAuth, graphHttp);
        }
    }

    // Construct a schema, using GraphQL schema language
    graphSchema() {
        let schema = fileLoader(BASE_PATH + '/plugins/**/*.graphql');
        schema = mergeTypes(schema, {
            all: true
        });
        return buildSchema(schema);
    }

    // The root provides a resolver function for each API endpoint
    graphResolver() {
        let rootValue = fileLoader(BASE_PATH + '/plugins/**/*-resolver.js');
        return mergeResolvers(rootValue);
    }
}

module.exports = Api;