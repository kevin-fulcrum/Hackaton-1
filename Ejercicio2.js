/* 
TODO: Ejercicio #2: Añadiendo elementos a un array 
TODO: - Añadir elementos a un array con Javascript push(Ciclo for)
TODO: - Crear un array de elementos que contenga nombres y posteriormente agregar más elementos por medio del método “push”
*/

let Frutas = new Array('Pera', 'Palta', 'Manzana', 'Naranja');
console.log(Frutas);
Frutas.push('Sandia');
console.log(Frutas);

let Alimentos = new Array('Zanahoria', 'Tomate', 'Lechuga');

for (let i = 0; i < Frutas.length; i++){
    Alimentos.push(Frutas[i]);
    //console.log(Frutas[i])
}
console.log("Todos los alimentos: ", Alimentos)