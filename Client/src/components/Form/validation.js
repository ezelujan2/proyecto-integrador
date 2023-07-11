
export default function validate (inputs){
    let errors = {};
    // Chequeo de email
    if(inputs.email.length > 35) errors.email = 'No puede tener mas de 35 caracteres'
    if (!/\S+@\S+\.\S+/.test(inputs.email)) errors.email = 'Ingresa un email valido';
    
    let size = inputs.password.length;
    let pass = inputs.password.split('')
    // Chequeo de password

    // Si no tiene un numero
    const num = pass.some((element) => !isNaN(element));

    if(size < 6 || size > 10) errors.password = 'Entre 6 y 10 caracteres'
    if(!num) errors.password = 'Al menos un numero'

    return errors;
}