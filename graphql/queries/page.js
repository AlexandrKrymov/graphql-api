const graphql   = require('graphql');
const PageType  = require('../PageType');
const Page      = require('../../models/Page');
const {
    GraphQLString,
    GraphQLList
} = graphql;

module.exports = {
    getPage: {
        type: PageType,
        args: { id: { type: GraphQLString }, title: { type: GraphQLString } },
        resolve(parent, args){
            if(args.id) return Page.findById(args.id);
            if(args.title) return Page.findOne({title: args.title});
        }
    },
    getPages: {
        type: new GraphQLList(PageType),
        args: { title: { type: GraphQLString } },
        resolve(parent, args){
            if(args.title) return Page.find({title: args.title});
            return Page.find();
        }
    }
}