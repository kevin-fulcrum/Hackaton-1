/*
TODO Ejercicio #7: Índice de masa corporal
TODO - Realizar un programa que nos permita calcular el índice de masa corporal de una persona por medio de su peso y altura solicitados
*/

const IMC = (Peso, Altuta) => {
    return Peso / Math.pow(Altuta, 2)
}

console.log("El indice de masa corporal es:", IMC(68, 1.65).toFixed(2))