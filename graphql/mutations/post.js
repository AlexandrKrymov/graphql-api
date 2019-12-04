const graphql   = require('graphql');
const PostType  = require('../PostType');
const Post      = require('../../models/Post');
const {
    GraphQLString
} = graphql;

module.exports = {
    createPost: {
        type: PostType,
        args: { id: { type: GraphQLString }, title: { type: GraphQLString } },
        resolve(parent, args){
            Post.create({
                author: args.author,
                title: args.title,
                content: args.content,
                url: args.url
            });
        }
    },
    updatePosts: {
        type: PostType,
        args: { id: { type: GraphQLString }, title: { type: GraphQLString } },
        resolve(parent, args){
            Post.update({
                author: args.author,
                title: args.title,
                content: args.content,
                url: args.url
            });
        }
    }
}