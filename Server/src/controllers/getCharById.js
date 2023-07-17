const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios")
const express = require('express')
const routerCharacter = express.Router();

routerCharacter.get("/:id", (req, res) => {
    axios(URL + req.params.id)
    .then(response => {
        const data = response.data;
        if(!data.id) res.send('no econtre')
        else {
        const personaje = {
            id : data.id,
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
        }
        res.json(personaje)
    }})
    .catch(error => {
        if(error.message.includes('404')) res.status(404).send('Not found')
        else res.status(500).send(error.message)})
})
module.exports = routerCharacter;