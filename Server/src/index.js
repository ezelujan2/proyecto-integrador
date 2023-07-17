const express = require('express');
const server = express();
const PORT = 3001;
const {routerCharacter,login,favorites} = require('./routes/index')

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});


server.use('/rickandmorty/character', routerCharacter)
server.use('/rickandmorty/login', login)
server.use('/rickandmorty/fav',favorites)
server.use(express.json());




server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});