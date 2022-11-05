// DOM ARRAYS

const titulo = document.querySelector("h2.tituloDom");

const listarPaises = document.querySelector("ul.listarPaises");

// escribir diretamente el html

function mostrarPaises() {
  listarPaises.innerHTML = "";
  paises.forEach((pais) => {
    // listarPaises.innerHTML += "<li id='" + "id-" + pais + "'>" + pais + "</li>";

    //TEMPLATE HTML
    listarPaises.innerHTML += `<li id="id-${pais}">${pais}</li>`;

    // TEMPLATE LITERALS
  });
}

/* paises.forEach((pais) => {
    const liPais = document.createElement("li");
    liPais.id = "id-" + pais;
    liPais.innerText = pais;
    listarPaises.append(liPais); 
  });*/

mostrarPaises();

function eliminarElemento(id) {
  const elementoHtml = document.getElementById(id);
  elementoHtml.remove();
}

function agregarPais() {
  let nuevoPais = prompt("Ingresa nuevos pais: ");
  if (!paises.includes(nuevoPais)) {
    paises.push(nuevoPais);
    //console.log("El pais ya esta en la lista.")
  } else {
    respuesta = confirm(
      "El pais " +
        nuevoPais +
        " ya esta en la lista de paises. Deseas agregar otro?"
    );
    if (respuesta) {
      agregarPais();
    }
  }
}

//DOM PRODUCTOS

const tbody = document.querySelector("tbody");

function armarHtml(producto) {
  return `<tr>
    <td>${producto.id}</td>
    <td>${producto.nombre}</td>
    <td>${producto.importe}</td>
    <td>${producto.precioFinal()}</td>
    </tr>`;
}
function recorrerProductos() {
  tbody.innerHTML = "";

  debugger;

  if (productos.length > 0) {
    productos.forEach((producto) => {
      tbody.innerHTML += armarHtml(producto);
    });
  }
}

recorrerProductos();
