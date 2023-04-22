import AdminBro from 'admin-bro';
import AdminBroMongoose from 'admin-bro-mongoose';
import Product from '../models/Product.js';
import User from '../models/User.js';

AdminBro.registerAdapter(AdminBroMongoose);

const options = {
    resources: [{ resource: Product }, { resource: User }],
    rootPath: '/admin',
}


export default options;