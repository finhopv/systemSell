const {Pedido} = require('../models/pedido');
const express = require('express');
const router = express.Router();

router.get(`/`, async(req, res)=>{
    const pedidoList = await Pedido.find();

    if(!pedidoList){
        res.status(500).json({success:false});
    }
    res.send(pedidoList);
})

router.post(`/`, (req, res)=>{
    const pedido = new Pedido({
        cliente_name: req.body.cliente_name,
        endereco: req.body.endereco,
        product_name: req.body.product_name,
        quantidade: req.body.quantidade,
        data: req.body.data
    })
    pedido.save().then((createdPedido => {
        res.status(201).json(createdPedido)
    })).catch((err)=>{
        res.status(500).json({
            error:err,
            success: false
        })
    })

    //res.send(newProduct);
})

module.exports=router;