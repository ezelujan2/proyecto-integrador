import Card from "../Card/Card";
import { connect } from "react-redux";
import estyle from "../Cards/Cards.module.css"
import { filterCards,orderCards } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import estilos from './Favorites.module.css'

export function Favorites({myFavorites}){
    const[aux, setAux] = useState(false)

    const dispacth = useDispatch();

    const handleOrder = (event) => {
        dispacth(orderCards(event.target.value))
        setAux(!aux);
    }

    const handleFilter = (event) => {
        dispacth(filterCards(event.target.value))
    }

    return (
        <>
        <select className={estilos.opt} onChange={handleOrder} style={{marginTop: "6rem", marginRight: "2rem"}}> 
            <option value="A">Ascendente</option>
            <option value="B">Descendente</option>
        </select>
        <select className={estilos.opt} onChange={handleFilter}> 
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="Everyone">Everyone</option>
        </select>
        <br />
        <div className={estyle.contenedores}>
        {myFavorites.map((character) => {
            return (
                <Card
            key = {character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={character.onClose}
         />
            )
        })}
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites,
    }
}

export default connect(
    mapStateToProps,
    null
 )(Favorites);