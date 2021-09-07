const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const palabras = ["hola", "como", "kiricocho", 'shabalala', "sopaipilla", 'pururu'];

/*const reducer = function (acum, value) {
    return acum + value
}*/
const reducer = (acum, value) => acum + value;

let dividirArray = (nums) => {
    const suma = nums.reduce((acum, value) => acum + value)
    return nums.map(num => num / suma)
}
let resultado = dividirArray(numeros)
//console.log(resultado);

function filtrado(arreglopalabras, numero) {
    return arreglopalabras.filter((palabra) => palabra.length > numero)
}
let = resultadopalabras = filtrado(palabras, 4)
console.log(resultadopalabras)