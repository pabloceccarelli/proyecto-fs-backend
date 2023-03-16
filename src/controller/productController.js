const { getProductService } = require("../service/productService");

const getProductController = async (req, res) => {
    
    camino = req.url;
    console.log(camino);
    try {
        const response = await getProductService(camino);
        console.log(response);
        res.send(response);
    } catch (error) {

    }
}



module.exports = { getProductController };