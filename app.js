const express = require ("express");
const bodyparser = require ("body-parser");
const routerUser = require ("./src/route/userRoute");
const routerProduct = require ("./src/route/productRoute");

const cors = require ("cors");


const app = express();

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();

})

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(routerUser);
app.use(routerProduct);
app.use(cors());

module.exports = app;

