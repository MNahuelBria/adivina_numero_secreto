// funcion para generar un numero aleatorio entre 1 a 100
const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};


// funcion para verificar si ambos numeros son iguales o no
const verificarAdivinanza = (numeroAdivinado, numeroSecreto) => {
    if (numeroAdivinado > numeroSecreto) {
        console.log("EL NUMERO SECRETO ES MENOR");
    } else if (numeroAdivinado < numeroSecreto) {
        console.log("EL NUMERO SECRETO ES MAYOR.")
    } else {
        console.log("¡FELICIDADES ACERTASTE EL NUMERO!");
    }
};


// exportar estas funciones a otro archivo
module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};