const hapi              = require('@hapi/hapi');
const Inert             = require('@hapi/inert');
const Vision            = require('@hapi/vision');
const HapiSwagger       = require('hapi-swagger');
const Pack              = require('./package');
const mongoose          = require('mongoose');
const { ApolloServer }  = require('apollo-server-hapi');

const routes            = require('./routes');
const schema            = require('./graphql/schema');

const server            = new ApolloServer({ schema });

const init = async () => {
    const app = hapi.server({
        port: 4000,
        host: 'localhost'
    });
    app.register([
        Inert,
        Vision,
        {
            'plugin': HapiSwagger,
            'options': {
                info: {
                    'title': 'GraphQL API Documentation',
                    'version': Pack.version,
                }
            }
        }
    ]);

    await server.applyMiddleware({ app });

    // Добавляем роуты
    routes.forEach(element => {
        app.route(element);
    });

    try {
        await app.start();
        console.log(`Server is running at: ${app.info.uri}`);
    } catch (err) {
        console.log(`Error while starting server: ${err.message}`)
    }
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

// Подключение к базе MongoDB
mongoose.connect('mongodb+srv://alexk:GVFVMJgBsodoNpKh@cluster0-wit4w.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});
