// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
    Mutation: {
        greet: (parent, { name }, context, info) => `Welcome ${name}!`,
    }
};

module.exports = resolvers;