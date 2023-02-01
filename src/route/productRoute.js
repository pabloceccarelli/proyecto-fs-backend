const {Router} = require("express");
const router = Router();

const {getProductController} = require("../controller/productController");


router.get("/products", getProductController);

module.exports = router;