const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString, 
    GraphQLInt
}  = graphql;
const { GraphQLDateTime } = require('graphql-iso-date');

const PageType = new GraphQLObjectType({
    name: 'Page',
    fields: () => ({
        author: { type: GraphQLString },
        title: { type: GraphQLString },
        url: { type: GraphQLString },
        content: { type: GraphQLString },
        createDate: { type: GraphQLDateTime },
        updateDate: { type: GraphQLDateTime }
    })
});

module.exports = PageType;