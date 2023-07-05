// importamos los modulos de adivinanza y readline-sync
const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');


// pedirle al usuario que cargue por teclado un numero
const pedirNumero = () => {
    return readlineSync.question("INGRESAR UN NUMERO: ");
};


// creamos la funcion principal para generar el juego de adivinanza
const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100.\n');

    // verificar si adivinamos el numero
    while (numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = pedirNumero();
        verificarAdivinanza(numeroAdivinado, numeroSecreto);
    }
};


// llamar a la funcion de adivinanza que es el script principal
juegoAdivinanza();