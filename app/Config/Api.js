module.exports = {
    // GraphQl Options
    options: {
        // https://www.npmjs.com/package/express-graphql
        // https://github.com/prisma/graphql-playground/releases
        // graphiql: true
        
        // https://www.apollographql.com/docs/apollo-server/features/graphql-playground
        // introspection: true,
        playground: {
            settings: {
                "editor.theme": "dark"
            }
        }
    },
    path: "/api",

    // cors npm
    cors: {
        enabled: true
    }
};