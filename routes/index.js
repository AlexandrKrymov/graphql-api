const postsRoutes       = require('./posts');
const pagesRoutes       = require('./pages');
const projectsRoutes    = require('./projects');
const reviewsRoutes     = require('./reviews');
const usersRoutes       = require('./users');

// Собраем все роуты в один массив и экспортируем его
const routes = [].concat(postsRoutes, pagesRoutes, projectsRoutes, reviewsRoutes, usersRoutes);

module.exports = routes;
