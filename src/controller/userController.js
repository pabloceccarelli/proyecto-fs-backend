const {loginUserService, saveUserService} = require("../service/userService");


const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const response = await loginUserService(email, password);

        if (response) {
            res.status(200).json({ login: response });
        } else {
            res.status(404).json({ error: "error not found" });
        }
    } catch (error) {

    }
}

const saveUserController = async (req, res) => {
    try {
        const { email, password, firstname } = req.body;

        let response = await saveUserService(email, password, firstname);
        if (response) {
            res.status(201).json({ response: "USUARIO CREADO OK" });
        } else {
            res.status(400).json({ response: "ERROR AL CREAR USUARIO" });
        }
    } catch (error) {

    }
}

module.exports = {loginUserController, saveUserController};