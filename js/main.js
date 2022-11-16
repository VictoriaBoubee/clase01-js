const carrito = []

const prendas = [{imagen: './img/celeste.jpg', codigo: 1, tipo: 'Bikini celeste', precio: 2900},
                 {imagen: './img/rosa.jpg', codigo: 2, tipo: 'Bikini rosa', precio: 3500},
                 {imagen: './img/marron.jpg', codigo: 3, tipo: 'Bikini marrón', precio: 3240},
                 {imagen: './img/flores.jpg', codigo: 4, tipo: 'Bikini floreada', precio: 3100},
                 {imagen: './img/verde.jpg', codigo: 5, tipo: 'Bikini verde', precio: 4290}]

const mensajeInicial = "Selecciona tu prenda por el código numérico:"

function buscarPrenda(codigo) {
    let resultado = prendas.find(prenda => prenda.codigo === parseInt(codigo))
        return resultado 
}

function comprar() {
    let codigo = prompt(mensajeInicial)
        if (!parseInt(codigo)) {
            alert("⛔️ Error en el código ingresado.")
            return 
        }
        let prendaElegida = buscarPrenda(codigo)
            carrito.push(prendaElegida)
        let respuesta = confirm("¿Deseas llevar otra prenda?")
        if (respuesta) {
            comprar()
        } else {
            finalizarCompra()
        }
}

function verCarrito() {
    if (carrito.length > 0) {
        console.table(carrito)
    } else {
        console.warn("El carrito está vacío!")
    }
}

function finalizarCompra() {
    if (carrito.length === 0) {
        console.warn("El carrito está vacío!")
        return 
    }
    const shopping = new Compra(carrito)
    alert(`El costo total es de $ ${shopping.obtenerSubtotal()}`)
    let respuesta = confirm("¿Deseas confirmar tu pago?")
        if (respuesta) {
            alert(shopping.confirmarCompra())
            carrito.length = 0
        }
}


/*
Instrucciones a ejecutar en la Consola JS.

    1) Ejecuta la función comprar() para iniciar la compra.
    2) Ejecuta la función verCarrito() para ver tus productos seleccionados.
    3) Ejecuta la función finalizarCompra() para comprar los productos del carrito.
*/




[
    {
    imagenes: ['images/imagen1.jpg', 'images/imagen2.jpg', 'images/imagen3.jpg'],
    codigo: 5,
    tipo: 'Camisa Office',
    precio: 4894
    }
]