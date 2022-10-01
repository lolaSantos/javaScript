/* let nombre = parseFloat(prompt("Ingresa tu nombre de usuario."));
 */
/* function saludar(usuario) {
  console.log("Hola", usuario);
}
 */
let nombre = prompt("cual es tu nombre?");
if (nombre) {
  console.log("Hola " + nombre);
}

/*   let empezar = confirm("Desea ver lista de prendas?");
  if (empezar) {
    prendas();
  } */

function prendas() {
  let prendas =
    "Prendas Disponibles: \n" +
    "1)Vestido Sarim \n" +
    "2)Jean Bluejean \n" +
    "3)Falda Mafia";

  let respuesta = prompt(
    "Ingresa el nro. de la prenda para ver el precio: \n" + prendas
  );
  switch (parseInt(respuesta)) {
    case 1:
      console.log("Elegiste la prenda 'Vestido Sarim'. Su precio es $8.000.");
      break;
    case 2:
      console.log("Elegiste la prenda 'Jean Bluejean'. Su precio es $11.000.");
      break;
    case 3:
      console.log("Elegiste la prenda 'Falda Mafia'. Su precio es $5.000.");
      break;
    default:
      console.error("No se reconoce la prenda que ingresaste.");
  }

  let continuar = confirm("Desea consultar el valor de otra prenda?");
  if (continuar) {
    prendas();
  }
}

/* ciclos */

/* let algo = prompt("Ingresa algo:");
console.log(algo); */

/* for (let i = 0; i < 5; i++) {
  let nombre = prompt("Cual es tu nombre?");
  if (nombre == "lola") {
    break;
  }
  console.log(nombre + "tiene el turno:" + i + "asignado");
}
 */

generadorAutomatico(){
  prendas.push()
}

function generarCarrito() {}
const numeros = (12, 4, 56, 2, 333, 85);

function listarElementos(array, fn) {
  for (elemento of array) fn(array);
}

function recorrerPrenda() {
  productos.forEach(function (elemento) {
    console.log(elemento);
  });
}

function buscarPrenda() {
  let buscar = prompt("Ingresa la prenda que buscas: ");
  let resultado = productos.find((elemento) => prendas.nombre === buscar);
  console.log(resultado);
}

function filtrarPrendas(){
  let buscar = prompt("Que prenda busca? ")
  let resultado = prendas.filter(elemento => elemento.nombre)
}