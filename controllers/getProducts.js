import Product from "../models/Product.js"

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).send(products);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal server error' });
    }
}
export { getProducts }