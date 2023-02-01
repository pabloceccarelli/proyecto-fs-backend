const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    idProd: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    precio:{
        type: String,
        required: true
    },
    genero:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    }
    

}, {collection:"products"});

module.exports = mongoose.model("Product", productSchema);