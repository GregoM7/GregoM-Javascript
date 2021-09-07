const suma = (n1,n2) => n1 + n2;
const resta = (n1,n2) => n1 - n2;
const multiplicacion = (n1,n2) => n1 * n2;
const division = (n1,n2) => n1 / n2;

function  calculadora(n1,n2, operacion) {
    return operacion(n1,n2)
    
}


const resultado = calculadora(2,3, suma)
const resultado1 = calculadora(2,3, resta)
const resultado2 = calculadora(2,3,multiplicacion)
const resultado3 = calculadora(10,2,((n1, n2) => n1 / n2))

console.log(resultado);
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

