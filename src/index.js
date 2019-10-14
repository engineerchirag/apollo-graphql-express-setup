const express = require('express');
const {
    ApolloServer,
    defaultPlaygroundOptions
} = require('apollo-server-express');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const PORT = process.env.PORT || 5000;


// Playground interface setup for our ApolloServer
const playgroundConfig = {
    ...defaultPlaygroundOptions,
    endpoint: `http://localhost:${PORT}/api`,
    settings: {
        ...defaultPlaygroundOptions.settings,
        'editor.theme': 'dark',
    },
};

// Apollo server configurations
const apolloServerConfig = {
    debug: true,
    resolvers,
    typeDefs,
    playground: playgroundConfig,
};

const server = new ApolloServer(apolloServerConfig);

const app = express();
server.applyMiddleware({
    app, path: '/api'
});

app.listen({
        port: PORT
    }, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);