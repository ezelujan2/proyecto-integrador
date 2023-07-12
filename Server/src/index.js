var http = require("http")
const {getCharById} = require('./controllers/getCharById');
const { log } = require("console");
// npm dotenv
// require("dotenv").config()
// process.env.PORT ---> nos dara el valor de la variable PORT que tenemos guardado en .env


const server = http
.createServer(((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const paths = (req.url).split('/') 
    if(req.url.includes("/rickandmorty/character")){
    const id = paths[3]
    log(id)
    return getCharById(res,id)
}
}))
.listen(3001, "localhost")

module.exports = {
    server,
}
