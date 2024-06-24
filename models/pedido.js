const mongoose = require ('mongoose');

const pedidoSchema = mongoose.Schema({
    cliente_name: String,
    endereco: String,
    product_name: String,
    quantidade: Number,
    data: Date

})

exports.Pedido = mongoose.model('Pedido', pedidoSchema)