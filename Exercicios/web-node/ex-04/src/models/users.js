const users = [
    { id: '1', name: 'Alice', email: 'alice@email.com', password: '123456', role: 'admin' }
]


module.exports = {
    findAll: () => users,

    findById: (id) => users.find((user) => user.id === id),

    findByEmail: (email) => users.find((user) => user.email === email),

    registerUser: (name, email, password) => {
        const userAlreadyRegistered = users.find(user => user.email === email);

        if (userAlreadyRegistered) return null;

        function gerarIdUnico(users) {
            if (users.length === 0) return 1;
            const maiorId = Math.max(...users.map(u => u.id));
            return maiorId + 1;
        }

        const newUser = {
            id: gerarIdUnico(users).toString(),
            name,
            email,
            password
        }

        users.push(newUser)

        return newUser;


    },


    createUser: (name, email, password, role ) => {
        const userAlreadyRegistered = users.find(user => user.email === email);

        if (userAlreadyRegistered) return null;

        function gerarIdUnico(users) {
            if (users.length === 0) return 1;
            const maiorId = Math.max(...users.map(u => u.id));
            return maiorId + 1;
        }

        const newUser = {
            id: gerarIdUnico(users).toString(),
            name,
            email,
            password,
            role
        }

        users.push(newUser)

        return newUser;
    },

    deleteUser: (id) => {
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            return false;
        }

        const [deletedUser] = users.splice(userIndex, 1)

        return deletedUser;
    }
}