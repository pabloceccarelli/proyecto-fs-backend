const Product = require("../model/Product");

const getProductService = async()=>{
    try {
        const products = await Product.find();
        return products;
    } catch (error) {
        return error;
    }
}


module.exports = { getProductService };
