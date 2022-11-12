//DOM PRODUCTOS

const tbody = document.querySelector("tbody");

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
}

//PROBANDO EN MI PROYECTO (msalio mal)

const divPrenda = document.querySelector("div.card");

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
}
