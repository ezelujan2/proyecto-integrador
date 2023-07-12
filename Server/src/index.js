var http = require("http")
var fs = require("fs");
const { log } = require("console");
const pj = require('./utils/data')

const server = http
.createServer(((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const paths = (req.url).split('/') 
    if(paths[1] === 'rickandmorty' && paths[2] === 'character'){
        if(paths[3]){
            const id = paths[3]
            let personaje = pj.find(elemento => elemento.id === Number(id))
            res.writeHead(200, {"Content-type" : "application/json"})
            return res.end(JSON.stringify(personaje))
            }
        else{
            res.writeHead(200, {"Content-type" : "application/json"})
            return res.end(JSON.stringify(pj))
        }
    }
    res.end(req.url)
}))
.listen(3001, "localhost")

module.exports = {
    server,
}
