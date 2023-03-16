const {Router} = require("express");
const router = Router();

const {getProductController} = require("../controller/productController");


router.get("/products", getProductController);

router.get("/products/hombres", getProductController);

router.get("/products/mujeres",getProductController);

module.exports = router;