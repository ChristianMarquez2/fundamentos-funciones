//Ejemplo de Módulos

// products.js
const products = [
    { id: 1, name: 'Smartphone', price: 299.99 },
    { id: 2, name: 'Laptop', price: 899.99 },
    { id: 3, name: 'Headphones', price: 99.99 }
  ];
    export function getProducts() {
    return products;
  }
    export function getProductById(id) {
    return products.find(product => product.id === id);
  }
  

  // cart.js
let cart = [];
export function addToCart(product) {
  cart.push(product);
  console.log(`${product.name} ha sido agregado al carrito.`);
}
export function removeFromCart(productId) {
  cart = cart.filter(product => product.id !== productId);
  console.log(`Producto con ID ${productId} ha sido eliminado del carrito.`);
}
export function showCart() {
  console.log("Contenido del carrito:");
  cart.forEach(product => {
    console.log(`${product.name}: $${product.price}`);
  });
}
export function getTotal() {
  return cart.reduce((total, product) => total + product.price, 0);
}

// checkout.js
import { getTotal } from './cart.js';

export function processPayment() {
  const totalAmount = getTotal();
  if (totalAmount > 0) {
    console.log(`El pago de $${totalAmount} ha sido procesado exitosamente.`);
  } else {
    console.log("El carrito está vacío, no se puede procesar el pago.");
  }
}
