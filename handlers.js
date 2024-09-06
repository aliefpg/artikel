let users = [
    { username: '<YOUR_USERNAME>', password: '<YOUR_PASSWORD>', isAdmin: true }
];

let articles = [
    { id: 'article-1', title: 'Article 1', author: 'Author 1', content: 'Content of article 1'},
    { id: 'article-2', title: 'Article 2', author: 'Author 2', content: 'Content of article 2'}
];

const login = (currentUser) => async (request, h) => {
    const { username, password } = request.payload;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return h.response({ error: 'Invalid username or password' }).code(401);
    }

    currentUser.value = user;
    return h.response({ message: 'Login successful', user: currentUser.value }).code(200);
};

const getAllArticles = (request, h) => {
    return h.response(articles).code(200);
};

module.exports = {
    login,
    getAllArticles
};
