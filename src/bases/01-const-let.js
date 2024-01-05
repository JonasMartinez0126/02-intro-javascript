// variables y constantes
const nombre = 'Jonas';//nunca va a cambiar el valor
const apellido = 'Martinez';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);
// variables scope
if(true){
    const nombre = 'Peter';
    let valorDado = 6;//esta variable solo va existir dentro del if
    console.log(nombre, valorDado);
}

console.log(valorDado);