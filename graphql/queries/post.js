const graphql   = require('graphql');
const PostType  = require('../PostType');
const Post      = require('../../models/Post');
const {
    GraphQLString,
    GraphQLList
} = graphql;

module.exports = {
    getPost: {
        type: PostType,
        args: { id: { type: GraphQLString }, title: { type: GraphQLString } },
        resolve(parent, args){
            if(args.id) return Post.findById(args.id);
            if(args.title) return Post.findOne({title: args.title});
        }
    },
    getPosts: {
        type: new GraphQLList(PostType),
        args: { id: { type: GraphQLString }, title: { type: GraphQLString } },
        resolve(parent, args){
            if(args.title) return Post.find({title: args.title});
            return Post.find();
        }
    }
}