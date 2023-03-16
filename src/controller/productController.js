const {getProductService} = require("../service/productService");

const getProductController = async (req, res) => {
    try {
        const response = await getProductService();
        console.log(response);
        res.send(response);
    } catch (error) {

    }
}



module.exports = {getProductController};