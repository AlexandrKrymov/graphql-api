const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString, 
    GraphQLInt
}  = graphql;
const { GraphQLDate } = require('graphql-iso-date');

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        author: { type: GraphQLInt },
        title: { type: GraphQLString },
        url: { type: GraphQLString },
        content: { type: GraphQLString },
        category: { type: GraphQLInt },
        date: { type: GraphQLDate }
    })
});

module.exports = PostType;