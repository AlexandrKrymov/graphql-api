const Review  = require('../models/Review');

module.exports = [
    {
        method:     'GET',
        path:       '/api/v1/reviews',
        config: {
            description: 'Get all the reviews',
            tags: ['api', 'v1', 'review']
        },
        handler:    (req, reply) => {
            return Review.find();
        }
    }, {
        method:     'POST',
        path:       '/api/v1/reviews',
        config: {
            description: 'Create new review',
            tags: ['api', 'v1', 'review']
        },
        handler:    (req, reply) => {
            const { author, project, content } = req.payload;
            const review = new Review({
                author,
                project,
                content
            });
            return review.save();
        }
    }
];