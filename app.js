const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require ('mongoose');
const cors = require('cors');

app.use(cors());
app.options('*', cors());

require('dotenv/config');
const api = process.env.API_URL;

// Routers
const productRouter = require('./routers/products');
const pedidoRouter = require('./routers/pedidos');
const categoryRouter = require('./routers/categories');
//const Product = require('./models/product');
//const Pedido = require('./models/pedido');
//const Category = require('./models/category');

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(`${api}/products`, productRouter);
app.use(`${api}/pedidos`, pedidoRouter);
app.use(`${api}/categories`,categoryRouter);


//http://localhost:3000/api/v1/products
//https://www.youtube.com/watch?v=juPYfVY6jkQ&t=185s >> time 15:50
//mongoose.connect('mongodb+srv://finhopv:bela1009@cluster0.mnlg648.mongodb.net/')
mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log('Database Connection is ready..')
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000, ()=>{
  
    console.log('server is running http://localhost:3000');
})