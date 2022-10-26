/* const agregarPrendas = () => {
  let id = prompt("Nombre de la prenda:");
  let prendaNueva = prompt("Descripción de la prenda:").toUpperCase();
  let precio = parseFloat(prompt("Precio"));
  prendas.push(new Producto(id, prendaNueva, precio));
  listaDePrendas();
};

function listaDePrendas() {
  console.table(prendas);
}

function generadorAutomatico() {
  prendas.push(new Producto(1234, "KOKO", 8000));
  prendas.push(new Producto(5678, "SEID", 4000));
  prendas.push(new Producto(9876, "LOW", 5500));
  prendas.push(new Producto(5432, "WAPA", 4000));
  prendas.push(new Producto(1357, "CLEOTH", 3500));
  prendas.push(new Producto(2468, "KALIS", 7000));
}

function recorrerProductos() {
  //debugger
  prendas.forEach((elemento) => {
    console.log(elemento);
  });
}

function buscarProducto() {
  let buscar = prompt("Ingresa el producto a buscar:");
  //debugger
  let busqueda = prendas.find((elemento) => elemento.nombre.includes(buscar));
  if (resultado === undefined) {
    console.warn("No se encontró el producto");
  } else {
    console.log(resultado);
  }
}

function filtrarProductos() {
  //let buscar = prompt("¿Qué producto busca?:")
  //elemento.nombre.includes(buscar)
  let resultado = prendas.filter((elemento) => elemento.importe > 200000);
  console.table(resultado);
  //console.log(resultado)
}

function proyeccion(porcentaje) {
  let resultadoProyeccion = productos.map((elemento) => {
    return {
      nombre: elemento.nombre,
      importe: elemento.importe,
      proyeccion: elemento.importe * porcentaje,
      descuento10: elemento.importe * 0.9,
    };
  });
  console.table(resultado);
}

function totalCarrito() {
  //debugger
  let total = carrito.reduce(
    (acc, elemento) => acc + elemento.importe * elemento.cantidad,
    0
  );
  console.log("El total del carrito es:", total);
}

function quitarPais() {
    let paisAquitar = prompt("Ingresa el país a quitar de la lista:")
    let posicion = paises.indexOf(paisAquitar) //ubica el índice de un elemento
        if (posicion > -1) {
            let paisQuitado = paises.splice(posicion, 1) //quita un elemento desde un índice específico            
            console.log(paisQuitado)
        }    
} */