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