const Project  = require('../models/Project');

module.exports = [
    {
        method:     'GET',
        path:       '/api/v1/projects',
        config: {
            description: 'Get all the projects',
            tags: ['api', 'v1', 'project']
        },
        handler:    (req, reply) => {
            return Project.find();
        }
    }, {
        method:     'POST',
        path:       '/api/v1/projects',
        config: {
            description: 'Create new project',
            tags: ['api', 'v1', 'project']
        },
        handler:    (req, reply) => {
            const { author, title, url, content, link, category } = req.payload;
            const project = new Project({
                author,
                title,
                url,
                content,
                link,
                category
            });
            return project.save();
        }
    }
];