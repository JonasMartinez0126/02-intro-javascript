
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, ,p3] = personajes;

//console.log(p1);
console.log(p3)

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [ letras, numeros ] = retornaArreglo();

console.log(letras);

// tarea
const usestate = (valor) => {
    return [ valor, () => { console.log('Hola mundo') }];
}

const [ nombre, setNombre] = usestate('Goku');
console.log(nombre);
setNombre();