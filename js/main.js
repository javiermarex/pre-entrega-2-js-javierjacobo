// Variables globales e mis productos.
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

// Inicia mi simulador. Comienza a pedirle datos al usuario.
function iniciarSimulador() {
    saludar();
    pedirDatos();
}

// Funcion de saludar.
function saludar() {
    alert("Bienvenid@ a nuestra Tienda de Insumos Informáticos");
}

// Funcion para pedirle datos al visitante.
function pedirDatos() {
    let nombre = prompt("Ingresar Nombre");
    let apellido = prompt("Ingresar Apellido");
    let anoNacimiento = parseInt(prompt("Ingresar Año de Nacimiento"));

    // Corrobora que el visitante sea mayor de edad (18 años)
    if (anoNacimiento >= 2006 || anoNacimiento <= 1900) {
        alert("No se permiten datos erróneos o menores de edad");
        window.close();
        return;
    }

    saludarCliente(nombre, apellido);
    mostrarProductos();
}

// Funcion de saludar una vez que corrobora los datos del visitante.
function saludarCliente(nombre, apellido) {
    alert("Hola " + nombre + " " + apellido);
}

// Funcion para mostrar las marcas que trabajamos.
function mostrarProductos() {
    let opcion = prompt("Elija qué lista quiere ver: \n 1-Nisuta \n 2-Genius \n 3-Logitech \n 4-Salir");

    switch (opcion) {
        case "1":
            mostrarListaPorMarca("Nisuta");
            break;
        case "2":
            mostrarListaPorMarca("Genius");
            break;
        case "3":
            mostrarListaPorMarca("Logitech");
            break;
        case "4":
            alert("Gracias por su visita.");
            window.location.href = "https://www.google.com.ar";
            break;
        default:
            alert("Opción no válida. Intente de nuevo.");
            mostrarProductos();
            break;
    }
}

// Funcion para mostrar los productos filtrando con map.
function mostrarListaPorMarca(marca) {
    let productosMarca = productos.filter(p => p.nombre.includes(marca));
    let lista = productosMarca.map(p => `${p.nombre}: $${p.precio}`).join('\n');

    let opcion = prompt(`${lista} \n\nPresione 1 para volver al menú anterior \nPresione 2 para salir`);

    if (opcion === "1") {
        mostrarProductos();
    } else if (opcion === "2") {
        alert("Gracias por su visita.");
        window.location.href = "https://www.google.com.ar";
    } else {
        alert("Opción no válida. Intente de nuevo.");
        mostrarListaPorMarca(marca);
    }
}
