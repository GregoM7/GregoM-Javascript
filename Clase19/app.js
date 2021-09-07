// 1- Funcion que convierta pulgadas a centimetros.

const pulACm = pulgadas => pulgadas * 2.54;
let resultado = pulACm(10)
console.log("EJERCICIO 1");
console.log(resultado + " cm")

//  2- Funcion que recibe string y convierte en URL

const aURL = pagina => "https://www."+pagina+".com"
let resultadourl = aURL("github")
console.log("EJERCICIO 2");
console.log(resultadourl)

// 3- Funcion con admiracion

const admiracion = string => "¡"+string+"!";
let stringadmiracion = admiracion("saludos")
console.log("EJERCICIO 3");
console.log(stringadmiracion);

// 4- Funcion calculadora edad de perros
const calculadoraDePerros = edadperro => edadperro * 7
let resultadoedadperro = calculadoraDePerros(3)
console.log("EJERCICIO 4");
console.log(resultadoedadperro);

// 5- Funcion valor hora de trabajo
const horaDeTrabajo = sueldo => sueldo / 40;
let resultadohoratrabajo = horaDeTrabajo(40000);
console.log("EJERCICIO 5");
console.log(resultadohoratrabajo);

// 6- Funcion calculadorIMC()
const calculadorIMC = (metros, kilos) => kilos/(metros*metros)
let resultadoIMC = calculadorIMC(1.90,69)
console.log("EJERCICIO 6");
console.log(resultadoIMC);

// 7- Funcion String a mayusculas
const aMayusculas = string => string.toUpperCase();
let stringAMayus = aMayusculas("hola grego")
console.log("EJERCICIO 7");
console.log(stringAMayus);

// 8- Funcion con TypeOF
const tipoDeDato = parametro => typeof(parametro);
let resultadoDato = tipoDeDato('adsjnfsdfna');
console.log("EJERCICIO 8");
console.log(resultadoDato);