import estilo from "./Card.module.css"
import boton from "../SearchBar/SearchBar.module.css"
export default function Card(props) {
   
   return (
      <div className={estilo.card}>
         <button onClick={props.onClose} className={boton.btn}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.name.split()[1]}</h2>
         <img src={props.image} className={estilo.imagenes} alt='' />
      </div>
   );
}
