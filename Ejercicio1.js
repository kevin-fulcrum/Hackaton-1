/*
TODO: Ejercicio #1: Información Factura
TODO: - Definir la estructura de un objeto que almacena una factura
TODO: - Las facturas están formadas por la información de la propia empresa (nombre de la empresa, dirección, teléfono, NIF), la información del cliente
TODO: (similar a la de la empresa), una lista de elementos (cada uno de los cuales dispone de descripción, precio, cantidad) y otra información básica de la
TODO: factura (importe total, tipo de IVA, forma de pago)
TODO: - Una vez definidas las propiedades del objeto, añadir un método que calcule el importe total de la factura y actualice el valor de la propiedad
TODO: correspondiente. Por último, añadir otro método que muestre por pantalla el importe total de la factura
*/

function Factura(empresa, cliente, producto, factura) {
	this.empresa = empresa;
	this.cliente = cliente;
	this.producto = producto;
	this.factura = factura;
}

const Empresa = {
    "Nombre": 'Fulcrum SA', 
    "Direccion": 'Av. Los Rosales', 
    "Telefono": '945896356', 
    "RUC": '10485412586'
}

const Cliente = {
    "Nombres": 'Luis', 
    "DNI": '45215845', 
    "Celular": '948568542'
}

const Producto = {
    "Descripcion": 'Libro', 
    "Precio": 16, 
    "Cantidad": 3
}

let subtotal = Producto['Precio'] * Producto['Cantidad']
const DetFactura = {
    "Subtotal": subtotal,
    "IGV": subtotal * 0.18,
    "Total": subtotal * 1.18,
    "Pago": 'Contado'
}

//console.log(DetFactura)

Factura1 = new Factura(Empresa, Cliente, Producto, DetFactura)

console.log(Factura1)