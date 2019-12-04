const User  = require('../models/User');

module.exports = [
    {
        method:     'GET',
        path:       '/api/v1/users',
        config: {
            description: 'Get all the users',
            tags: ['api', 'v1', 'user']
        },
        handler:    (req, reply) => {
            return User.find();
        }
    }, {
        method:     'POST',
        path:       '/api/v1/users',
        config: {
            description: 'Create new user',
            tags: ['api', 'v1', 'user']
        },
        handler:    (req, reply) => {
            const { name, role, email, phone, active } = req.payload;
            const user = new User({
                name,
                role,
                email,
                phone,
                active
            });
            return user.save();
        }
    }
];