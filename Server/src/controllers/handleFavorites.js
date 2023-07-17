const express = require('express')
const favorites = express.Router();

let myFavorites = [];
favorites.use(express.json());

favorites.post('/', (req,res) => {
    myFavorites.push(req.body)
    res.json(myFavorites)
})

favorites.delete('/:id', (req,res)=> {
    const eliminado = myFavorites.find(favs => favs.id == req.params.id)
    myFavorites = myFavorites.filter(favs => favs !== eliminado)
    res.json(myFavorites)
})

module.exports = favorites;