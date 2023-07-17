const express = require('express')
const login = express.Router();
const datos = require('../utils/users')



login.get('/', (req, res) => {
    const {email, password} = req.query
    let devuelto = false;

    datos.map(data => {
        if(data.email === email && password === data.password){
            devuelto = true;
        }
    })

    res.json({access:devuelto})

})

module.exports = login;