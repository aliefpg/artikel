const handlers = require('./handlers');

module.exports = (currentUser) => [
    {
        method: 'POST',
        path: '/login',
        handler: handlers.login(currentUser)
    },
    {
        method: 'GET',
        path: '/articles',
        handler: handlers.getAllArticles
    },
    {
        method: 'GET',
        path: '/articles/{id}',
        handler: handlers.getArticleById
    }
];
