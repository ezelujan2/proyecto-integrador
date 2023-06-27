import Card from "../Card/Card";
import estyle from "./Cards.module.css"


export default function Cards(props) {
   const characters = props.characters;
   return (
   <div className={estyle.contenedores}>
      {
         characters.map(character => {
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
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
            )
         })
      }
   </div>)
}
