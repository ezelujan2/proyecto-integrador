const axios = require("axios");

const getCharById = (res, id) => {
axios(`https://rickandmortyapi.com/api/character/${id}`)
.then(personaje => {
    const pj = {
        id: id,
        name : personaje.data.name,
        gender : personaje.data.gender,
        species : personaje.data.species,
        origin : personaje.data.origin,
        image : personaje.data.image,
        status : personaje.data.status,
    }
    res.writeHead(200, {"Content-type" : "application/json"})
    return res.end(JSON.stringify(pj))
})
.catch(error => {
    console.log(error)
    res.writeHead(500, "text/plain")
    return res.end(error.message)
})
}

module.exports = {
    getCharById,
}