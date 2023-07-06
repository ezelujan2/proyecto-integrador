import estilo from './Form.module.css'
import es from '../SearchBar/SearchBar.module.css'
import { useState } from 'react'
import validate from './validation'

export default function Form ({login,access}){
    let[errors,setErrors] = useState({
        email : '',
        password: '',
    })

    const handleChange = (event) => {
        setErrors({...errors, [event.target.name] : event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(errors)

    }

    return (
        <form onSubmit={handleSubmit} className={estilo.formulario}>
            <img className={estilo.imga} src="https://cdn.shopify.com/s/files/1/0042/7563/4222/collections/R_M_collab_logo.jpg?v=1623834383" alt="Rick&Morty"/>
            <label htmlFor="email">EMAIL</label>
            <input onChange={handleChange} value={errors.email} className={estilo.inp} type="text"  name="email" placeholder="E-mail"/>
            {errors.email && <p className={estilo.danger}>{validate(errors).email}</p>}
            <br />
            <label htmlFor="password">PASSWORD</label>
            <input onChange={handleChange} value={errors.password} className={estilo.inp} type='password'  name="password" placeholder="Password"/>
            {errors.password && <p className={estilo.danger}>{validate(errors).password}</p>}

            <button disabled={validate(errors).password || validate(errors).email} className={es.btn} type="submit">Submit</button>
        </form>
    )
}