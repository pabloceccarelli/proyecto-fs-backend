const {Router} = require("express");
const router = Router();
const {loginUserController, saveUserController} = require("../controller/userController");

router.post("/users/login", loginUserController);
router.post("/users/register",  saveUserController);

module.exports = router;