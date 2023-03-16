const Product = require("../model/Product");

const getProductService = async(camino)=>{
    try {
        let products;
        if(camino =="/products"){
            products = await Product.find();
        }
        if(camino =="/products/hombres"){
            products = await Product.find({"genero":"Hombre"});
        }
        if(camino == "/products/mujeres"){
            products = await Product.find({"genero":"Mujer"});
        }
        
        
        return products;
    } catch (error) {
        return error;
    }
}


module.exports = { getProductService };
