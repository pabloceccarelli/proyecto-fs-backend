const mongoose = require ("mongoose");
const url = "mongodb://localhost/proyecto-fs" //si tuvieramos un servidor externo aqui ponemos la ip o la url del mismo.

//si en el compass no la tenemos creada a la bd, cuando vayamos a conectar, si no existe la crea, pero solo cuando vamos a crear algo


mongoose.connect(url,{useNewUrlParser: true});

const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("BD conectada");
})