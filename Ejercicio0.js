//TODO: Ejercicio #0: Dada una lista de números, añade una función que permita devolver el menor de los valores de una la lista

let Numeros = [6, 15, 8, 2, 45, 68, 3, 24]
const SortNumericallu = (a,b) => {
    return a - b;
}
Numeros.sort(SortNumericallu)
console.log("El menor numero es: " + Numeros[0]);