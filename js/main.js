
// Variables globales de mis productos.
let productos = [
    { nombre: "Teclado Nisuta NS-KB8812B", precio: 2500 },
    { nombre: "Mouse Nisuta NS-MO8813", precio: 1200 },
    { nombre: "Auriculares Nisuta NS-AUD6898", precio: 3500 },
    { nombre: "Mouse Genius DX-120", precio: 1800 },
    { nombre: "Teclado Genius KB-100", precio: 2800 },
    { nombre: "Parlantes Genius SP-HF160", precio: 4200 },
    { nombre: "Mouse Logitech M185", precio: 7000 },
    { nombre: "Teclado Logitech K120", precio: 4500 },
    { nombre: "Auriculares Logitech H340", precio: 12000 }
];

// Al cargar la página, recuperar datos almacenados
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('usuario')) {
        mostrarProductos();
    }
});

// Evento para iniciar simulador
document.getElementById('start-btn').addEventListener('click', iniciarSimulador);

// Función para iniciar el simulador
function iniciarSimulador() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let anoNacimiento = parseInt(document.getElementById('anoNacimiento').value);

    if (!nombre || !apellido || !anoNacimiento) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Validar la edad
    if (anoNacimiento >= 2006 || anoNacimiento <= 1900) {
        alert("No se permiten datos erróneos o menores de edad.");
        return;
    }

    // Guardar datos en localStorage
    let usuario = { nombre, apellido, anoNacimiento };
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Saludar y mostrar productos
    saludarCliente(usuario);
    mostrarProductos();
}

// Función para saludar al cliente
function saludarCliente(usuario) {
    alert(`Hola ${usuario.nombre} ${usuario.apellido}`);
}

// Función para mostrar productos en la página
function mostrarProductos() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = `
        <h2>Seleccione una marca:</h2>
        <button onclick="mostrarListaPorMarca('Nisuta')">Nisuta</button>
        <button onclick="mostrarListaPorMarca('Genius')">Genius</button>
        <button onclick="mostrarListaPorMarca('Logitech')">Logitech</button>
    `;
    document.getElementById('reset-btn').style.display = "block";
}

// Función para mostrar productos por marca
function mostrarListaPorMarca(marca) {
    let productosMarca = productos.filter(p => p.nombre.includes(marca));
    let productList = document.getElementById('product-list');
    productList.innerHTML = `
        <h2>Productos de la marca ${marca}:</h2>
        <ul>
            ${productosMarca.map(p => `<li>${p.nombre}: $${p.precio}</li>`).join('')}
        </ul>
        <button onclick="mostrarProductos()">Volver al menú anterior</button>
    `;
}

// Evento para reiniciar simulador
document.getElementById('reset-btn').addEventListener('click', () => {
    localStorage.removeItem('usuario');
    window.location.reload();
});
