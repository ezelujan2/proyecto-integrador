const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios")


async function  routerCharacter (req, res) {
    try {
    const {data}  = await axios(URL + req.params.id)
    if(!data) throw new Error('Personaje no encontrado')
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
    
        
    } catch (error) {
        console.log(error)
        if(error.message.includes('404')) res.status(404).send('Not found');
        else res.status(500).send(error.message)
    }
}
module.exports = routerCharacter;