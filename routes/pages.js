const Page  = require('../models/Page');

module.exports = [
    {
        method:     'GET',
        path:       '/api/v1/pages',
        config: {
            description: 'Get all the pages',
            tags: ['api', 'v1', 'page']
        },
        handler:    (req, reply) => {
            return Page.find();
        }
    }, {
        method:     'POST',
        path:       '/api/v1/pages',
        config: {
            description: 'Create new page',
            tags: ['api', 'v1', 'page']
        },
        handler:    (req, reply) => {
            const { author, title, url, content } = req.payload;
            const page = new Page({
                author,
                title,
                url,
                content
            });
            return page.save();
        }
    }
];