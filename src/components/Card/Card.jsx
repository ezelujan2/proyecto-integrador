import estilo from "./Card.module.css"
import boton from "../SearchBar/SearchBar.module.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";
import { useState, useEffect } from "react";


function Card(props) {

   const [isFav, setIsFav] = useState(false);

   let myFavorites = props.myFavorites;
   console.log(myFavorites)


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   const handleFavorite = () => {
      if (isFav === true) {
         props.removeFav(props.id);
         setIsFav(false)
      }
      else {
         setIsFav(true)
         props.addFav(props);
      }
   }

   return (
      <div className={estilo.card}>
         <button onClick={()=> props.onClose(props.id)} className={boton.elim}>X</button>

         { isFav ? ( <button onClick={handleFavorite}>❤️</button>) : ( <button onClick={handleFavorite}>🤍</button>)}

         <Link to={`/detail/${props.id}`}><h2 className={estilo.nombre}>{props.name}</h2></Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.name.split()[1]}</h2>
         <img src={props.image} className={estilo.imagenes} alt='' />
      </div>
   );
}
const mapDispatchToProps = (dispacth) => {
   return{
      addFav : (card) => dispacth(addFav(card)),
      removeFav : (card) => dispacth(removeFav(card)),
   }
}
const mapStateToProps = (state) => {
   return {myFavorites : state.myFavorites};
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
