
//Desestructuración de arreglos y objetos: 
const products = [
    { name: 'Celular', price: 300, inStock: true },
    { name: 'Auriculares', price: 50, inStock: true },
    { name: 'Cargador', price: 20, inStock: false },
    { name: 'Estuche', price: 15, inStock: true }
];

const [product1, product2, product3, product4] = products;

console.log(`Producto 1: ${product1.name}, Precio: ${product1.price}, Disponible: ${product1.inStock}`);
console.log(`Producto 2: ${product2.name}, Precio: ${product2.price}, Disponible: ${product2.inStock}`);
console.log(`Producto 3: ${product3.name}, Precio: ${product3.price}, Disponible: ${product3.inStock}`);
console.log(`Producto 4: ${product4.name}, Precio: ${product4.price}, Disponible: ${product4.inStock}`);

const { name: productName, price: productPrice, inStock } = product1;
console.log(`Detalles del Producto: ${productName}, Precio: ${productPrice}, Disponible: ${inStock}`);

//Operador ternario

let clients = ['Juan', 'Pedro', 'Luis', 'Ana', 'Maria'];

const maxClients = 6;
const checkClientGroup = (clients) => {
    clients.length >= maxClients 
        ? console.log("Grupos completos, no se pueden agregar más clientes.") 
        : console.log(`Se puede agregar más clientes. Actualmente hay ${clients.length} clientes en el grupo.`);
};
checkClientGroup(clients);
const addClient = (newClient) => {
    clients.length < maxClients 
        ? (clients.push(newClient), console.log(`${newClient} ha sido agregado al grupo.`)) 
        : console.log("No se puede agregar más clientes, pero la queria tanto... que daba igual");
};
addClient('Ella');
checkClientGroup(clients);
addClient('Carlos');
