import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css"
import { NavLink } from "react-router-dom"
import estilo from "../SearchBar/SearchBar.module.css"
import { useLocation } from "react-router-dom"

export default function Nav(props){
    const location = useLocation()
    if (location.pathname === '/') return <></>;

    const handleLogOut = () => {
        props.setAccess(false);
    } 
    return(
        <nav className={style.barra}>
            <NavLink className={`${estilo.btn} ${style.bt}`}  to="/about">About</NavLink>
            <NavLink className={`${estilo.btn} ${style.bt}`} to="/home">Home</NavLink>
            <NavLink className={`${estilo.btn} ${style.bt}`} to='/favorites'>Favorites</NavLink>
            <NavLink className={`${estilo.btn} ${style.bt}`} onClick={() => props.clearPage()} to="/home">Clear</NavLink>
            <SearchBar onSearch={props.onSearch}/>
            <button className={`${estilo.btn} `} onClick={handleLogOut}>Log out</button>
            
            
        </nav>
    )
}