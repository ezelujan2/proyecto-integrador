// const routerCharacter = require('../controllers/getCharById')
const express = require('express')
const rutas = express.Router();

const routerCharacter = require('../controllers/getCharById')
const login = require('../controllers/login')
const {addFavorite,deleteFavorite} = require('../controllers/handleFavorites')

rutas.get("/character/:id", routerCharacter)
rutas.get('/login', login)
rutas.post('/fav', addFavorite)
rutas.delete('/fav/:id', deleteFavorite)


module.exports = {rutas}


