// funciones en JS
// forma recomendable
const saludar = function(nombre) {
    return `Hola ${nombre}`;
}
// funciones de flecha
/*const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}*/

const saludar2 = (nombre) => `Hola ${nombre}`;


console.log(saludar('Jonas'));
console.log(saludar2('Daniel'));

/*const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'gsdfgdfs'
    }
}*/
const getUser = () => ({
    uid: 'ABC123',
    username: 'gsdfgdfs'
});

console.log(getUser());
// tarea
//1. Tranformar a una funcion de fecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas
/*function getUsuarioActivo(nombre) {
    return {
        uid: 'ABCD123',
        username: nombre
    }
};*/
const getUsuarioActivo = (nombre) => ({
    uid: 'ABCD123',
    username: nombre
});
const usuarioActivo = getUsuarioActivo('Fernado');

console.log(usuarioActivo);