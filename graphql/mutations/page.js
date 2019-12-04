const graphql   = require('graphql');
const PageType  = require('../PageType');
const Page      = require('../../models/Page');
const {
    GraphQLString,
    GraphQLList
} = graphql;

module.exports = {
    createPage: {
        type: PageType,
        args: {
            author: { type: GraphQLString },
            title: { type: GraphQLString },
            content: { type: GraphQLString },
            url: { type: GraphQLString }
        },
        resolve(parent, args){
            Page.create({
                author: args.author,
                title: args.title,
                content: args.content,
                url: args.url
            }, ( err, result ) => {
                if (err) console.log('Err: ' + err);
                return result;
            });
        }
    },
    updatePage: {
        type: PageType,
        args: {
            id: { type: GraphQLString },
            author: { type: GraphQLString },
            title: { type: GraphQLString },
            content: { type: GraphQLString },
            url: { type: GraphQLString }
         },
        resolve(parent, args){
            Page.updateOne({ _id: args.id }, {
                author: args.author,
                title: args.title,
                content: args.content,
                url: args.url,
                updateDate: new Date()
            }, ( err, result ) => {
                if (err) console.log('Err: ' + err);
                return result;
            });
        }
    },
    deletePage: {
        type: PageType,
        args: { id: { type: GraphQLString } },
        resolve(parent, args){
            Page.deleteOne( { _id: args.id }, ( err, result ) => {
                if( err ) console.log('Err: ' + err);
                return result;
            } );
        }
    }
}