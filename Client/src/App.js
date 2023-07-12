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
   const EMAIL = 'ezequiel@gmail.com'
   const PASSWORD = 'ezequiel1'
   const navigate = useNavigate();

   const login = (userData) => {
      if(userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');   
      };

   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   let[characters,setCharacters] = useState([])

   function onSearch(id) {
      let encontrado = false;
      characters.map((el) => {
         if (el.id == id) {encontrado = true};
      })
      if(encontrado) alert('Este ID ya se encuentra en pantalla') 
      else{
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters([...characters, data]);
         } else {
            if(id <= 0) window.alert(`ID invalido!`);
            else window.alert(`¡No hay personajes con este ID: ${id}!`);
         }
      });
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
