/*
TODO: Ejercicio #3: Valor futuro de una inversión
TODO: - Realice un programa para calcular el valor futuro de una inversión; la fórmula para obtener este valor es la siguiente:
TODO: valor_futuro =valor*Math.pow (1+tasa/100,periodo)
*/

const InversionFutura = (Valor, Tasa, Periodo) => {
    return Valor * Math.pow((1 + (Tasa/100)), Periodo)
}

console.log("Valor Futura de la inversion es: ", InversionFutura(150, 0.15, 12))