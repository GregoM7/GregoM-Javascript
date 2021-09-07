/* Clase 5 

let dia= "martes";
 let variableRespuesta= "Salgo con mi sarita " + salidas (dia);
  
 function salidas (dia){
 switch(dia){
     case "viernes":
        return "desde tempranito :)";
        break;
    case "martes":
        return "desde tempranito :)";
        break;
    case "sabado":
        return "desde tempranito :)";
    break;
    case "domingo":
        return "desde tempranito :)";
    break;
    default:
        return "solo si es a la noche :(";

 }
}
console.log(variableRespuesta);
*/
/* 
PULGADAS
let pulgadas= 3;
 function pulgadasCm (){
     let resultado= pulgadas*2.54;
     return resultado + "cm"
 }
 console.log(pulgadasCm());*/

/* UrL
let nombre="chuchi";
 function url (nombre){
    return "http://www."+nombre+ ".com";
 }
  
 console.log(url(nombre));
*/
/* let frase= "te amo mucho";
 function admiracion(frase){
     return frase + "!";
 }
 console.log(admiracion(frase));
 */

/* Perros
let edad =7;
 function edadPerros(edad){
     return "la edad es "+ edad*7;
 }
console.log(edadPerros(edad)); */

/* Sueldo
let sueldo= 50000
function horaDeTrabajo(sueldo){
    return "Tu hora de trabajo es de: " + sueldo/40 + " pesos"
}
console.log(horaDeTrabajo(sueldo))
*/

/* IMC
let altura =1.57
let peso= 57

function imc(altura,peso){
    return "tu imc es: " + peso/(altura*altura);
}
console.log(imc(altura,peso));
*/
/* Mayus
let frase = "mañana hay prueba";
function mayus(frase){
    return frase.toUpperCase();
}
console.log(mayus(frase));
*/
/* Tipo de dato
let dato = "sarah"
function tipoDato(dato){
    return dato;
}
console.log(typeof(dato)); */

/*  Radio de la circunferencia 
let radio= 2
function circunferencia(radio){
    return "la circunferencia es de : " + radio*Math.PI*2;
}
console.log(circunferencia(radio));
*/

/* CALCULADORA 
let num1 = 300;
let num2 = 15;
let num3 = 2;

function Suma(num1, num2) {
  return num1 + num2;
}
console.log("<--------Funcion Suma-------->");
console.log(Suma(num1, num2));

function resta(num1, num2) {
  return num1 - num2;
}
console.log("<--------Funcion Resta-------->");
console.log(resta(num1, num2));

function multiplicar(num1, num2) {
  return num1 * num2;
}
console.log("<--------Funcion Multiplicacion-------->");
console.log(multiplicar(num1, num2));

function dividir(num1, num2) {
  return num1 / num2;
}
console.log("<--------Funcion Division-------->");
console.log(dividir(num1, num2));

function cuadradoDeUnNumero(num1){
    let potencia = multiplicar(num1,num1)
    return potencia
}
console.log("<--------Funcion Cuadrad0-------->");
console.log(cuadradoDeUnNumero(num1));

function promedioDeTres(num1,num2,num3){
    let total= Suma(num1,num2,num3);
    return  "el promedio es: " +total/3;
}
console.log("<--------Funcion Promedio-------->");
console.log(promedioDeTres(num1,num2,num3));

function calcularPorcentaje (num1,num2){
 let pasoUno= dividir(num1,100);
 let pasoDos= multiplicar(pasoUno,num2);
 return pasoDos
}
console.log("<--------Funcion Porcentaje-------->");
console.log(calcularPorcentaje (num1,num2))

function generadorPorcentaje (num1,num2){
    let pasoUnos= multiplicar(num1,100);
    let pasoDoss= dividir(pasoUnos,num2);
    return pasoDoss
   }
   console.log("<--------Funcion Generador de Porcentaje-------->");
   console.log(generadorPorcentaje (2,200))

   */
/*CODE
let edad= 16;
let altura= 1.32;
   function montania(edad,altura){
    let primero= edad>12;
    let segundo= altura>1.30
    return primero && segundo;
   }
   console.log("<----montania sin if ------>");
   console.log(montania(edad,altura));


   console.log("<----montania con if ------>");

   function montanias(edad,altura){
    if ((edad>12) && (altura>1.30)){
        return("Puede subir")
    } else{
        return("No puede subir")
    }
   }
   console.log(montanias(edad,altura))


   console.log("<----Luz sin if ------>");

   let luz= false;
   let movimiento= false;

    console.log("<----Luz con if ------>");

    if(luz==true || movimiento==true){
        console.log("Se enciende el flash");
    }
    else{
        console.log("No usar flash");
    }

    console.log("<----- EStudiante--->");
let ev1= 2
let ev2=5
let final=2

console.log((ev1>7&&ev2>7)|| final>=4);
console.log("<----- Tv--->");
 let tarea= true;
 let piano=true;
 let memoria= false;

 console.log(tarea&&piano&&memoria);

 console.log("<----- Tv if--->");
 if (tarea&&piano&&memoria){
     console.log("puede ver la tele");
 }
 else{
     console.log("no puede ver")
 }

 */
/*
 let dato= false;

 if (dato==true){
    console.log("es true");
 }
 else{
    console.log("es false");
 }
 console.log("<----practica--->");

 let lenguaje ="phyton"
if(lenguaje=="javascript"){
    console.log("EsTOY APRENDIENDO");
}
else{
    console.log("lo aprendere");
}

function puedePasar(nombre){
    if (nombre== "Cosme Fulanito"){
        return false
    }
    else{
        return true
    }
}
console.log(puedePasar("Cosme Fulanito"));
*/

console.log("- Clase 8---");
/* BAR
let edad=21
if (edad<0){
    console.log("Error edad invalida");
}
else if(edad<18) {
console.log("No puede pasar al bar.")
}
else if(edad<21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")
}


else{
console.log("Puede pasar al bar y tomar alcohol.")
}

if(edad===21){
    console.log("Felicitaciones por la mayoria de edAD")}
if (edad%2 !=0){
    console.log("sabias que ru edad es impar");
}
*/
/* Coche
let vehiculos = "coche";
let litrosConsumidos = 5;
let MontoTodo = totalApagar(vehiculos, litrosConsumidos);

function totalApagar(vehiculos, litrosConsumidos) {

  switch (vehiculos) {
    case "coche":
      total = litrosConsumidos * 86;
      break;
    case "moto":
      total = litrosConsumidos * 70;
      break;
    case "autobus":
      total = litrosConsumidos * 55;
      break;
  }
  if (0 < litrosConsumidos < 25) {
    total = total + 50;
  } else total = total + 25;
 
  return total;

}
console.log(MontoTodo);
*/
/* LANCHES
let sandwich = "pollo";
let pan= "negro";
let total=0
let queso = 1
let tomate = 0
let lechuga = 0
let cebolla = 0
let mayonesa = 1
let mostaza = 1

switch (sandwich){
    case "pollo":
        total= total + 150;
        break;
    case "carne":
        total= total + 200;
        break;
    case "veggie":
        total= total + 100;
        break;
    default :
    console.log("ingrese un valor de los determinados");
}
switch (pan){
    case "blanco":
        total= total + 50;
        break;
    case "negro":
        total= total + 60;
        break;
    case "sin gluten":
        total= total + 75;
        break;
    default :
    console.log("ingrese un valor de los determinados");
}
if (queso == 1) {
    total = total + 20;
  }
  if (tomate == 1) {
    total = total + 15; 
  }
  if (lechuga == 1) {
    total = total + 10;
  }
  if (cebolla == 1) {
    total = total + 15;
  }
  if (mayonesa == 1) {
    total = total + 5;
  }
  if (mostaza == 1) {
    total = total + 5;
  }
  console.log("El total a pagar es: " + total);
  */
 /*
 let incognita = 3;
  let mensajeFinal= mimsoNumero(incognita)
 function mimsoNumero(incognita) {
    let numero= (Math.floor(Math.random() * (10 - 1)) + 1);
 
if (numero==incognita){
    let mensajeBueno= "felcitaciones has acertado";
    return mensajeBueno
}
else{
    let mensajeMalo ="No fue esta ves , tu numero era: " + numero + " y el elegido: " + incognita;
    return mensajeMalo
}
 }
 console.log(mensajeFinal); 
 */