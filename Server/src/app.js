const express = require('express');
const server = express();
const {rutas} = require("../src/routes/index")
const cors = require("cors")

server.use(cors())

server.use(express.json());
server.use('/rickandmorty', rutas)

module.exports = server;