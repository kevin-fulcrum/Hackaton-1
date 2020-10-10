/*
TODO Ejercicio #9:
TODO -Teniendo una lista de números enteros, sumar todos los números pares e impares en dicha lista y mostrarlo en variables separadas.
*/

let Numbers = new Array(5, 1, 8, 145, 12, 485, 152, 2458);
let Pares = [];
let Impares = [];
let sumaPar = 0;
let sumaImpar = 0;

for (let i of Numbers){
    //? a%b --> Resto de la division
    if(i%2 == 0){
        Pares.push(i)
    }else{
        Impares.push(i)
    }
    //console.log(i%2)
}

for(let i = 0; i < Pares.length; i++){
    sumaPar += Pares[i]   
}
console.log("La suma de todos los numeros pares es: ", sumaPar)

for(let i = 0; i < Impares.length; i++){
    sumaImpar += Impares[i]   
}
console.log("La suma de todos los numeros impares es: ", sumaImpar)