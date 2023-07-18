const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
    it('Responde con status: 200', async() =>{
        await agent.get('/rickandmorty/character/1').expect(200);
    })
    it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`,
    async () => {
        const response = await agent.get('/rickandmorty/character/1');
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("species")
        expect(response.body).toHaveProperty("gender")
        expect(response.body).toHaveProperty("status")
        expect(response.body).toHaveProperty("origin")
        expect(response.body).toHaveProperty("image")
    })
    it("Si hay un error responde con status: 500", async() => {
        await agent.get('/rickandmorty/character/rhr').expect(500)
    })
})

describe("GET /rickandmorty/login", () => {
    it('Devuelve access: true en caso de entregarle los valor correctos', async()=> {
        const email = "ezequiel@gmail.com"
        const pass = 'ezequiel1'
        const response = await agent.get(`/rickandmorty/login/?email=${email}&password=${pass}`)
        expect(response.body).toEqual({access:true})
    })
    it('Devuelve access: false en caso de entregarle valores incorrectos', async() => {
        const response = await agent.get("/rickandmorty/login/?email=eze@gmail.com&password=wrong433")
        expect(response.body).toEqual({access:false})
    })
})

let favorito1 = {
    id: 810,
    name: 'Stan Lee Rick',
    status: 'unknown',
    species: 'Human',
    gender: 'Male',
    origin: 'unknown',
    image: 'https://rickandmortyapi.com/api/character/avatar/810.jpeg',
    myFavorites: []
  }

let favorito2 = {
    id: 261,
    name: 'Photography Cyborg',
    status: 'unknown',
    species: 'Robot',
    gender: 'Male',
    origin: 'unknown',
    image: 'https://rickandmortyapi.com/api/character/avatar/261.jpeg',
    myFavorites: []
  }

describe("POST /rickandmorty/fav", () => {
    it('Devuelve arreglo lo que envio por el body', async() => {
        const response = await agent.post("/rickandmorty/fav").send(favorito1)
        expect(response.body).toEqual([favorito1])
    })
    it('Si enviamos un nuevo elemento devuelvo un arreglo conteniendo el anterior agregado', async() => {
        const response = await agent.post("/rickandmorty/fav").send(favorito2);
        expect(response.body[0]).toEqual(favorito1)
    })
})

describe("DELETE /rickandmorty/fav/:id", () => {
    it('Devuelve mismo arreglo en caso de que su ID no se encuentre en favoritos', async () => {
        const response = await agent.delete('/rickandmorty/fav/42')
        expect(response.body).toEqual([favorito1,favorito2])
    })
    it('Elimina corractamente con id valido', async() => {
        const response = await agent.delete(`/rickandmorty/fav/${favorito1.id}`);
        expect(response.body).toEqual([favorito2])
    })
})