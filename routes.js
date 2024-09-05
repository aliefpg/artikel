const handlers = require('./handlers');

module.exports = (currentUser) => [
    {
        method: 'POST',
        path: '/login',
        handler: handlers.login(currentUser)
    },
];
