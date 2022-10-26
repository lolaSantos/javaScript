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

const IVA = 1.21;

class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}
precioFinal();
{
  return this.precio * IVA;
}

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

*/