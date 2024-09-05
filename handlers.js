let users = [
    { username: '<YOUR_USERNAME>', password: '<YOUR_PASSWORD>', isAdmin: true }
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

module.exports = {
    login
};
