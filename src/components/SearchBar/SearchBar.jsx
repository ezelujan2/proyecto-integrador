import estilos from "./SearchBar.module.css"
export default function SearchBar({onSearch}) {
   return (
      <div className={estilos.buscador}>
         <input type='search' className={estilos.input} placeholder="Buscador"/>
         <button onClick={onSearch} className={estilos.btn}>Agregar</button>
      </div>
   );
}
