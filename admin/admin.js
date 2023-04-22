
import pkg from 'admin-bro-expressjs';
const { buildRouter } = pkg;


const buildAdminRouter = (admin) => {
    const router = buildRouter(admin);
    return router;
};


export { buildAdminRouter };