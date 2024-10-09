//Condicionales
function calcularDescuento(historialCompras) {
    let descuento = 0;
    if (historialCompras > 500) {
        descuento = 20;  
    } else if (historialCompras > 200) {
        descuento = 10;  
    } else {
        descuento = 5;   
    }
    return `Descuento aplicado: ${descuento}%`;
}
console.log(calcularDescuento(600));  


//Métodos
const usuario = {
    nombre: "Christian",
    direccionEnvio: "Calle Falsa 123",
    actualizarDireccion: function(nuevaDireccion) {
        this.direccionEnvio = nuevaDireccion;
        return `La dirección de envío ha sido actualizada a: ${this.direccionEnvio}`;
    }
};
console.log(usuario.actualizarDireccion("Avenida Real 456"));

//Argumentos Opcionales
function calcularCostoEnvio(peso, envioRapido = false) {
    let costoBase = peso * 5;
    if (envioRapido) {
        costoBase += 20; 
    }
    return `El costo de envío es: $${costoBase}`;
}
console.log(calcularCostoEnvio(3));         
console.log(calcularCostoEnvio(3, true));     


//Función Flecha
const productos = [
    { nombre: "Zapatos", categoria: "Ropa", precio: 50 },
    { nombre: "Celular", categoria: "Tecnología", precio: 300 },
    { nombre: "Chaqueta", categoria: "Ropa", precio: 80 },
];

const filtrarPorCategoria = (productos, categoria) => productos.filter(producto => producto.categoria === categoria);
console.log(filtrarPorCategoria(productos, "Ropa"));

//Destructuración
const productoSeleccionado = {
    nombre: "Laptop",
    precio: 1000,
    stock: 5,
    descripcion: "Laptop de última generación con 16GB RAM."
};

const { nombre, precio, stock } = productoSeleccionado;
console.log(`Producto: ${nombre}, Precio: $${precio}, Stock disponible: ${stock}`);