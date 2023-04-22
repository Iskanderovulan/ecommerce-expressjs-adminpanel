import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import homeRoutes from './routes/homeRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import favoriteRoutes from './routes/favoriteRoutes.js'
import { config } from './config.js';
import session from 'express-session';
import { login, loginRouter } from './adminRouter/adminLogin.js';
import { products, productsRouter } from './adminRouter/adminProducts.js';


dotenv.config();
const port = process.env.PORT || 5050;

mongoose
    .set('strictQuery', false)
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connect db success'))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });

const app = express();
app.use(express.static('uploads'));
app.use(express.json());
app.use(cors());
app.use(session({
    secret: config.secretKey,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true, sameSite: true, httpOnly: true, maxAge: 60 * 60 * 1000 }
}));

app.use('/auth', authRoutes);
app.use('/home', homeRoutes);
app.use('/cart', cartRoutes);
app.use('/favorite', favoriteRoutes);
app.use(login.options.rootPath, loginRouter);
app.use(products.options.rootPath, productsRouter);

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('ok');
});