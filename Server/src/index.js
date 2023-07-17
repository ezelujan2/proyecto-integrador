const express = require('express');
const server = express();
const PORT = 3001;
const {rutas} = require("../src/routes/index")
const cors = require("cors")

server.use(cors())

server.use(express.json());
server.use('/rickandmorty', rutas)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});