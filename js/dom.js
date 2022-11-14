//DOM PRODUCTOS

/* const tbody = document.querySelector("tbody");

const productos = [];

const carrito = [];

function armarHtml(producto) {
  return `<tr>
    <td id="productID">${producto.id}</td>
    <td>${producto.nombre}</td>
    <td>${producto.importe}</td>
    <td>${producto.precioFinal()}</td>
    </tr>`;
}
function recorrerProductos() {
  tbody.innerHTML = "";
  if (productos.length > 0) {
    productos.forEach((producto) => {
      tbody.innerHTML += armarHtml(producto);
    });
    generarListenerID();
  }
}

recorrerProductos();

function generarListenerID() {
  const IDdeproductos = document.querySelectorAll("td#productID");

  if (IDdeproductos.length > 0) {
    IDdeproductos.forEach((productId) => {
      productId.addEventListener("dblclick", (e) => {
        console.log(e.target.innerText);
        carrito.push(e.target.innerText);
        console.table(carrito);
      });
    });
  }
} */

//PROBANDO EN MI PROYECTO (msalio mal)

/* const divPrenda = document.querySelector("div.card");

function carritoPrendas(producto) {
  return `<div class="card">
  <h5 class="cardTitle">${producto.nombre}</h5>
  <p class="cardPrecio">${producto.precio}</p>
  <a href="" class="cardLink">✿</a>
</div>`;
}

function verCarrito() {
  divPrenda.innerHTML = "";
  if (productos.length > 0) {
    productos.forEach((producto) => {
      divPrenda.innerHTML += carritoPrendas(producto);
    });
    generarElCarrito();
  }
}
verCarrito();

function generarElCarrito() {
  const classPrenda = document.querySelectorAll("a.cardLink");
  if (classPrenda.length > 0) {
    classPrenda.forEach((cardLink) => {
      cardLink.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        carrito.push(e.target.innerText);
        console.table(carrito);
      });
    });
  }
} */

const carrito = []
const container = document.querySelector("div.container")

const activarBotonesAdd = ()=> { //ASIGNO EL EVENTO CLICK EN TODOS LOS BOTONES DE LAS CARDS
    const botonesAdd = document.querySelectorAll(".button.button-outline.button-add")
          botonesAdd.forEach(btn => btn.addEventListener("click", (e)=> agregarAlCarrito(e)))
}

const cargarMisProductos = ()=> { //RECORRO ARRAY Y ARMO LAS CARDS, PARA CARGARLAS EN PANTALLA
    container.innerHTML = ""
    productos.forEach(producto => container.innerHTML += retornoCard(producto))
    activarBotonesAdd()           //activo el evento click en los botones
}
cargarMisProductos()

const agregarAlCarrito = (e)=> {  //AGREGAR UN PRODUCTO AL CARRITO
    let resultado = productos.find(prod => prod.nombre === e.target.id)
        if (resultado !== undefined) {
            carrito.push(resultado)
            guardarCarrito()
            // console.clear()
            // console.table(carrito)
        }
}

const guardarCarrito = ()=> {
    if (carrito.length > 0) { localStorage.setItem("carrito", JSON.stringify(carrito)) }
}

const recuperarCarrito = ()=> {
    if (localStorage.getItem("carrito")) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"))
            carritoRecuperado.forEach(producto => carrito.push(producto))
    } else {
        console.warn("No se encontró un carrito previamente guardado.")
    }
}
recuperarCarrito()