const edadMin = 12;
const alturaMin = 1.30;

//let puedeSubir = edad >= edadMin && altura >= alturaMin;

main();

function main() {
if (puedeSubir(11, 1.5)) {
  levantarBarreraEntrada();
} else {
  levantarBarreraSalida();
}
}


function puedeSubir(edad, altura) {
  return edad >= edadMin && altura >= alturaMin;
}
function levantarBarreraSalida() {
  console.log("levantando barrera salida...");
}
function levantarBarreraEntrada() {
  console.log("levantando barrera entrada...");
}
let dia = "lunes"
switch (dia) {
	case "viernes":
	console.log("buen finde");
	case "lunes":
	console.log("buena semana");
	break
	default:
	console.log("buen dia") 
}