module.exports = {
    // GraphQl Options
    options: {
        // https://www.apollographql.com/docs/apollo-server/features/graphql-playground
        // introspection: true,
        playground: {
            settings: {
                "editor.theme": "dark"
            }
        }
    },
    path: "/api",

    // https://www.rockyourcode.com/how-to-enable-cors-for-apollo-server
    cors: {
        origin: '*',            // <- allow request from all domains
        credentials: true
    }
};