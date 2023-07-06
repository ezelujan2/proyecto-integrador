import estilos from './About.module.css'
export default function About(){
    return(
        <div className={estilos.about}>
            <h4>Soy Ezequiel</h4>
            <p className={estilos.detalle}>Un gusto conocerlos, y que puedan conocer mi nueva pagina</p>
        </div>
    )
}