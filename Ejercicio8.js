/*
TODO Ejercicio #8:
TODO - Teniendo una lista de objetos en distintos idiomas, idiomas usados.
TODO Elabora un traductor e identificador de idioma con los datos dados, de manera sencilla.
*/

function Frase(Idioma, Texto){
    this.Idioma = Idioma,
    this.Texto = Texto
}

Idioma1 = new Frase("Español", "Bienvenido al curso de React Native en PachaQtec")
Idioma2 = new Frase("Ingles", "Welcome to the React Native course at PachaQtec")
Idioma3 = new Frase("Francés", "Bienvenue dans le cours React Native chez PachaQtec")
Idioma4 = new Frase("Italiano", "Benvenuti al corso React Native presso PachaQtec")
Idioma5 = new Frase("Portugués", "Bem-vindo ao curso React Native na PachaQtec")

const Diccionario = {
    'Idioma 1': Idioma1,
    'Idioma 2': Idioma2,
    'Idioma 3': Idioma3,
    'Idioma 4': Idioma4,
    'Idioma 5': Idioma5
}

//console.log(Diccionario)

let BuscarIdioma = {
    'Texto': 'Welcome'
}

for (let i in Diccionario){
    if(Diccionario[i].Texto.indexOf(BuscarIdioma.Texto) > -1){
        console.log("El idioma detectado es:", Diccionario[i].Idioma)
    }
}

