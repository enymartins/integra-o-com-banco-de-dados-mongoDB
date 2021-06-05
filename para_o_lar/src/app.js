const express = require('express')
const cors = require('cors')

const estabelecimentos = require('./routes/estabelecimentosRoutes')

//essa linha de código faz a conexão real com o banco de dados
const db = require('../src/data/database')
db.connect()

const app = express()
app.use(express.json()) 
app.use('/estabelecimentos', estabelecimentos)

module.exports = app
