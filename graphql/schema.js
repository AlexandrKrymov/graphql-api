const graphql     = require('graphql');
const queries     = require('./queries');
const mutations   = require('./mutations');
const { 
    GraphQLObjectType,
    GraphQLSchema
} = graphql;

const Queries = new GraphQLObjectType({
    name: 'QueryType',
    fields: queries
});

const Mutations = new GraphQLObjectType({
    name: 'MutationType',
    fields: mutations
});

module.exports = new GraphQLSchema({
    query: Queries,
    mutation: Mutations
});