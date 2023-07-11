import estilos from "./SearchBar.module.css"
import {useState} from 'react';

export default function SearchBar({onSearch}) {

   let [id,setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const handleSearch = (event) => {
      onSearch(id);
      
   }
   const handleKeyDown = (event) => {
      if(event.key === 'Enter'){
         handleSearch();
         event.target.value = '';
      }
   }

   return (
      <div className={estilos.buscador}>
         <input type='search' className={estilos.input} placeholder="Ingresar ID" onInput={handleChange} onKeyDown={handleKeyDown}/>
         <button onClick={handleSearch} className={estilos.btn}>Agregar</button>
         <button onClick={() => {
            let random = Math.floor(Math.random() * 827)
            if(random === 0) random+=1;
            onSearch(random);
            }
            } className={estilos.btn}>Random</button>
      </div>
   );
}
