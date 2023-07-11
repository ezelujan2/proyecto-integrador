import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import estilos from './Details.module.css'

export default function (){
    let[car,setCharacter] = useState('');
    let param = useParams();
    let id = param.id;
    console.log(param);
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     
    let origen = car.origin;
    if(origen) origen = origen.name
    
    
    return(
        <div className={estilos.contenedor}>
            <div className = {estilos.contenedorImagen}>
                <img src={car.image}></img>
            </div>
            <div className={estilos.contenedorTexto}>
                <h1>{car.name}</h1>
                <h2>STATUS: {car.status}</h2>
                <h2>GENDER: {car.gender}</h2>
                <h2>SPECIE: {car.species}</h2>
                <h2>ORIGEN: {origen}</h2>

            </div>

        </div>
    )
}