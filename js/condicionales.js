/* let nombre = prompt("Hola! ¿Cual es tu nombre?");

//FUNCIONES Y OBJETOS

function saludar() {
  console.log("Hola " + nombre);
}

//saludar();
 
// FUNCIONES CON PARAMETROS

function calcular(primerNumero, segundoNumero) {
  if (!isNaN(primerNumero) || !isNaN(segundoNumero)) {
    let resultado = primerNumero + segundoNumero;
    console.log("Resultado: " + resultado);
  } else {
    alert("Solo Numeros");
  }
}

function pedirNumero() {
  let primerNumero = parseFloat(prompt("Numero"));
  let segundoNumero = parseFloat(prompt("Numero"));
  calcular(primerNumero, segundoNumero);
}

//En pedirnumero a lo ultimo vemos como  se reutiliza la funcion, en este caso, calcular.


//FUNCIONES CON RETORNO

 function realizarCalculo(pNo, sNo) {
  return pNo * sNo;
}

function verMult() {
  debugger;
  console.log("Resultado de la multiplicaicon:", realizarCalculo(4567, 5678));

} 

const persona1 = {
  nombre: "Luis",
  apellido: "Gonzalez",
  edad: "30",
  cargo: "administrativo",
  ingreso: "30-10-2010",
};

const persona2 = {
  nombre: "Javier",
  apellido: "Ruiz",
  edad: "33",
  cargo: "vendedor",
  ingreso: "22-12-2009",
}; 


// OBJETOS CONSTRUCTORES

//la primera inicial de una funcion constructora debe ser en mayuscula.


 function altaDeEmpleado() {
  let nombre = prompt("Ingresa el nombre");
  let apellido = prompt("Ingresa el apellido");
  let edad = prompt("Ingresa edad");
  let cargo = prompt("Ingresa el cargo");
  let ingreso = prompt("Ingresa el ingreso");
}

const empleado1 = new Empleado(nombre, apellido, edad, cargo, ingreso);
console.log(empleado1); 

function Empleado(nombre, apellido, edad, cargo, ingreso) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.cargo = cargo;
  this.ingreso = ingreso;
}

const empleado1 = new Empleado(
  "Luis",
  "Gonzalez",
  "30",
  "administrativo",
  "30-10-2010"
);

const empleado2 = new Empleado(
  "Javier",
  "Ruiz",
  "33",
  "vendedor",
  "22-12-2009"
);
const producto1 = new Producto("KOKO", 7000, 10);
const producto2 = new Producto("SEID", 4500, 15);
const producto3 = new Producto("LOW", 9500, 7);




class Cotizador {
  constructor(metros2, alarma, factor) {
    this.metros2 = metros2;
    this.alarma = alarma;
    this.factor = factor;
  }
  cotizarPoliza() {
    return this.factor * this.metros2 * this.alarma;
  }
}

const VALORFIJO = 36.33;

function cotizarSeguro() {
  debugger;
  const metros2 = prompt("Ingresa los m2 de tu propiedad:");
  const factor = 1.12;
  const cotizadorHogar = new Cotizador(metros2, 1, VALORFIJO);
  console.log("El costo del seguro es:", cotizadorHogar.cotizarPoliza());
}



// ARRAYS Y FUNCIONES DE ORDEN SUPERIOR

//Reservar la palabra const para declarar arrays.


const nombre = "Lola Santos";

*/

const paises = [
  "Argentina",
  "Uruguay",
  "Chile",
  "Colombia",
  "Venezuela",
  "Mexico",
  "Cuba",
  "Guatemala",
];

/*

const paisesDelNorte = ["Mexico", "USA", "Canada"];

const carrito = [];

function listarPaises() {
  console.table(paises);
}

// Para recorrer un array se suele usar el ciclo for

function recorrerArray() {
   for (let i = 0; i < paises.length; i++) console.log(paises[i]); 

  // ciclo FOR OF

  for (pais of paises) {
    debugger;
    console.log(pais);
  }
}

  paises.push(nuevoPais); //PUSH agrega elemento en la ultima posicion de un array
  //paises.unshift(nuevoPais)//UNSHIFT agrega elemento en la primera posicion de un array
}

function quitarPais() {
  let paisQuitar = prompt("Que pais queres quitar?:");
  let posicion = paises.indexOf(paisQuitar); //IndexOFF ubica el indice de un elemento
  if (posicion > -1) {
    paises.splice(posicion, 1); //SPLICE quita un elemento desde un indice especifico
    console.log(paisQuitar);
  }
    let paisQuitado = paises.pop()//Elimina el ultimo elemento del array
  let paisQuitado = paises.shift()//Elimina el pirmer elemento del array
  console.log(paisQuitado) 
}
*/

const productos = [];
const IVA = 1.21;

class Producto {
  constructor(id, nombre, importe) {
    this.id = id;
    this.nombre = nombre;
    this.importe = importe;
  }
  precioFinal() {
    return parseFloat((this.importe * IVA).toFixed(2));
  }
}

function generadorAutomatico() {
  productos.push(new Producto(123, "DRESS KOKO", 7000));
  productos.push(new Producto(234, "POLLERA SEID", 3500));
  productos.push(new Producto(345, "POLLERA LOW", 8000));
  productos.push(new Producto(456, "SACO WAPA", 5500));
  productos.push(new Producto(567, "MINI CLEAOTH", 4000));
  productos.push(new Producto(678, "DRESS KALI", 7500));
}

generadorAutomatico();

/*

const carrito = [];

function generarCarrito() {
  carrito.push(new Producto(123, "PANTALON KAIA", 8500));
  carrito.push(new Producto(234, "PAÑUELO SHAKE", 2000));
  carrito.push(new Producto(345, "POLLERA CARMINA", 3500));
}

generarCarrito();

function listarProductos() {
  console.table(productos);
}

const agregarProducto = () => {
  let id = creoID();
  let descripcion = prompt("Descripcion del nuevo producto:").toUpperCase();
  let importe = parseFloat(prompt("Importe ( sin IVA ): "));
  productos.push(new Producto(id, descripcion, importe));
  listarProductos();
};

const creoID = () => parseInt(Math.random() * 10000); //ID numerico dinamico

const resultado = (num1, num2) => num1 + num2;

const IVA = 1.21;

 precioFinal();
{
  return parseFloat((this.importe * IVA).toFixed);
} 

//FOR EACH

function recorrerProductos() {
  productos.forEach((elemento) => {
    console.log(elemento);
  });
}

//FIND

function buscarProducto() {
  let buscar = prompt("Que producto buscas?");
 let resultado = productos.find((elemento) => elemento.nombre === buscar); 
  let resultado = productos.find((elemento) =>
    elemento.nombre.includes(buscar)
  );
  if (resultado === undefined) {
    console.warn("No se encuentra la prenda");
  } else {
    console.log(resultado);
  }


// Podemos ITERAR un array con: FOR - FOR OF - FOREACH(el mas rapido).

//CREO QUE BORRE EL FOR OF

const numeros = [12, 4, 56, 2, 333, 85];
  

// FOR 


function listarElementos(array, fn) {
  for (elemento of array) {
    fn(elemento);
  }
}
 

function filtrarProductos() {
let buscar = prompt("Que producto busca?");

   let resultado = productos.filter((elemento) =>
    elemento.nombre.includes(buscar)
  ); 

  //FILTER

  let resultado = productos.filter((elemento) => elemento.importe > 5000);
  console.table(resultado);
}

//MAP

function proyeccion(porcentaje) {
  let resultado = productos.map((elemento) => {
    return {
      nombre: elemento.nombre,
      importe: elemento.importe,
      proyeccion: elemento.importe * porcentaje,
      descuento: elemento.importe * 0.9,
    };
  });
  console.table(resultado);
}

//REDUCE

//ACC = ACUMULADOR ()
function totalCarrito() {
  let total = carrito.reduce(
    (acc, elemento) => acc + elemento.importe * elemento.cantidad,
    0
  );
  console.log("El total del carrito es:", total);
}

//SORT

function ordenar() {
  let productosOrdenados = productos.sort((a, b) => {
    if (a.importe > b.importe) {
      return 1;
    }
    if (a.importe < b.importe) {
      return -1;
    }
    return 0;
  });
  console.table(productosOrdenados);
}

// DOM ARRAYS

const listaDePaises = document.querySelector("ul");

function mostrarPaises() {
  paises.forEach((pais) => {
    listaDePaises.innerHTML += "<li>" + pais + "</li>";
  });
}
mostrarPaises();
 */
