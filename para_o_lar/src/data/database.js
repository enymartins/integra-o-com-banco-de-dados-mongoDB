//conexão com o banco de dados
const mongoose = require('mongoose');
//porta padrão do mongodb = 27017
const connect = () => { mongoose.connect('mongodb://localhost:27017/estabelecimentos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('MongoDB conectado!')).catch(err => console.err)
}

module.exports = { connect }