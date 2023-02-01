const {getProductService} = require("../service/productService");

const getProductController = async (req, res) => {
    try {
        const response = await getProductService();
        res.send(response);
    } catch (error) {

    }
}



module.exports = {getProductController};