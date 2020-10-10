/*
TODO: Ejercicio #6: Identificar llamada
TODO: - Un teléfono celular cuenta con una funcionalidad de identificación de llamadas permitiendo no solo ver qué número nos intenta contactar sino
TODO: también conocer qué contacto dado de alta en nuestro dispositivo, nos llama
TODO: - Realizar un programa que imite esta funcionalidad, principalmente que el usuario al ingresar el número de teléfono, el programa reconozca a quién pertenece el mismo
*/

function Persona (Nombre, Telefono) {
    this.Nombre = Nombre;
    this.Telefono = Telefono;
}

Contacto1 = new Persona('Kevin', '963521456')
Contacto2 = new Persona('Bryan', '951563254')
Contacto3 = new Persona('Lidia', '978654112')

const Contactos = {
    'Contacto1': Contacto1,
    'Contacto2': Contacto2,
    'Contacto3': Contacto3,
}

let llamada1 = {
    'Telefono': '951563254'
}

for(let i in Contactos){
    if(Contactos[i].Telefono == llamada1.Telefono){
        console.log("El siguiente número",llamada1.Telefono ,"pertenece a:", Contactos[i].Nombre);
    }
}
