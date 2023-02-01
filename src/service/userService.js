const User = require("../model/User");
const bcryptjs = require ("bcryptjs");

const loginUserService = async (email, password) => {
    try {
        const user = await User.findOne({ email: email });

        let compare = await bcryptjs.compareSync(password, user.passwordHash); //comparo password del req, con passwordHash de la BD

        if (compare ) {
            return true; //aqui podría retornar un true

        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}



const saveUserService = async (email, password, firstname /* lo ideal es que aqui se pase un objeto json que vino del front */) => {
    try {

        let passwordHash = await bcryptjs.hash(password, 8);
        
        await User.create({
            //en la clase del 14 de dic, minuto 58, crea un id con math random
            email,
            passwordHash,
            firstname
        });
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = { loginUserService, saveUserService };
