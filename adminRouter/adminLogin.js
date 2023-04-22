import AdminBro from 'admin-bro';
import AdminBroExpress from 'admin-bro-expressjs';
import options from '../admin/options.js';

const login = new AdminBro(options);

const loginRouter = AdminBroExpress.buildAuthenticatedRouter(login, {
    authenticate: async (email, password) => {
        // Your authentication logic goes here
        // Here's an example of how you could check the email and password
        if (email === 'xanderlan13@gmail.com' && password === 'ainuramylove') {
            return { email: email };
        }
        return null;
    },
});

export { login, loginRouter };