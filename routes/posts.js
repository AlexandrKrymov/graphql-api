const Post  = require('../models/Post');

module.exports = [
    {
        method:     'GET',
        path:       '/api/v1/posts',
        config: {
            description: 'Get all the posts',
            tags: ['api', 'v1', 'post']
        },
        handler:    (req, reply) => {
            return Post.find();
        }
    }, {
        method:     'POST',
        path:       '/api/v1/posts',
        config: {
            description: 'Create new post',
            tags: ['api', 'v1', 'page']
        },
        handler:    (req, reply) => {
            const { author, title, url, content, category } = req.payload;
            const post = new Post({
                author,
                title,
                url,
                content,
                category
            });
            return post.save();
        }
    }
];