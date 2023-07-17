import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Details from './components/Details/Details';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'


function App() {
   let[access,setAccess] = useState(false);
   const navigate = useNavigate();

   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   let[characters,setCharacters] = useState([])

   async function onSearch(id) {
      let encontrado = false;
      characters.map((el) => {
         if (el.id == id) {encontrado = true};
      })
      if(encontrado) alert('Este ID ya se encuentra en pantalla') 
      else{
         try {
            if(id <= 0) throw TypeError("ID invalido!");
            const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            if(data.name) setCharacters([...characters,data]);
            else{
               throw new Error(`¡No hay personajes con este ID: ${id}!`);
            }
            
         } catch (error) {
            if(error.message.includes('ID')) window.alert(error.message)
            else window.alert(`¡No hay personajes con este ID: ${id}!`)
         }
      }
   }
   
   const onClose = (id) => {
      let filterCharacters = characters.filter((el)=> el.id !== id)
      setCharacters(filterCharacters)
   }

   const clearPage = () =>{
      setCharacters([]);
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} onClose={onClose} clearPage={clearPage} setAccess={setAccess}/>
         <Routes> 
               <Route path='/' element={<Form access={access} login={login}/>}/>
               <Route path='/home' element={<Cards characters={characters} onSearch={onSearch} onClose={onClose}/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/detail/:id' element={<Details/>} />
               <Route path='/favorites' element={<Favorites/>} />
               <Route path=':error' element= {<Error/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
