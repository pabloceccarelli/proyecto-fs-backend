require ("./database");

const app = require("./app");

const main = () =>{
    app.listen (8000, ()=>{
        console.log("Escuchando por el puerto 8000");
    });
}
main();