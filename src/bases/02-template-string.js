const nombre = 'Jonas';
const apellido = 'Martinez';

const nombreCompleto = `${nombre} ${apellido}`;


function getSaludo(nombre) {
    return 'Hola '+nombre;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);