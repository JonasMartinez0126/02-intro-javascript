// objetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        cuidad: 'New York',
        zip: 5556156,
        lat: 14.546,
        lng: 34.6545
    }
};

console.log({
    persona
});
// se esta copiando la referencia
//const persona2 = persona;
const persona2 = { ...persona };
persona2.nombre = 'Peter';
console.log(persona2);