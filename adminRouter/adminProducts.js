import AdminBro from 'admin-bro';
import options from '../admin/options.js';
import { buildAdminRouter } from '../admin/admin.js'



const products = new AdminBro(options);
const productsRouter = buildAdminRouter(products);


export { products, productsRouter }
