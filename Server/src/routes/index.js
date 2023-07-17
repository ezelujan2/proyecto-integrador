// const routerCharacter = require('../controllers/getCharById')

// const express = require('express')
// server.use('/character',routerCharacter)

const routerCharacter = require('../controllers/getCharById')
const login = require('../controllers/login')
const favorites = require('../controllers/handleFavorites')




module.exports = {
    routerCharacter,
    login,
    favorites,
}

