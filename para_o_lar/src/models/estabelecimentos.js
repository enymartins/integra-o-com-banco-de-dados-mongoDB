const mongoose = require('mongoose');


const estabelecimentosSchema =  new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
    },
    data: {
        type: Date, 
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('estabelecimento', estabelecimentosSchema)