/*
TODO: Ejercicio #5: Creando un objeto círculo
TODO: - Realizar un programa que permita crear un molde para objetos de tipo círculo al que le pasamos el radio cuando lo inicialicemos, y que tenga una
TODO: función que nos calcule su área, otra su longitud, y estos valores sean mostrados por pantalla
*/

//? Calcular referido que se desea Calcular

const Cirle = (Calcular, Radio) =>{
    switch(Calcular){
        //? Primer Caso para el Area
        case 1:
            return (Math.PI * Math.pow(Radio, 2)).toFixed(3)
            break;
        //? Segundo Caso para la Longitud
        case 2:
            return (2 * Math.PI * Radio).toFixed(3)
            break;
    }
}

console.log('El area del circulo es: ', Cirle(1, 5))
console.log('La longitud del circulo es: ', Cirle(2, 5))
