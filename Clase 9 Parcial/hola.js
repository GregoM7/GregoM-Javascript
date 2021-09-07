let numero1 
let numero2 
let resultado

function multiplicacion(numero1, numero2) {
    if ((numero1 == 0) || (numero2 == 0)) {
        return (resultado = 0)+" "+"No se puede multiplicar";
    } else {
        return resultado = (numero1*numero2);
    }
}

console.log(multiplicacion(4,0))


let texto = "mira como te como dibuu"
let palabra = "dibuu"
function menciona(texto, palabra) {
    if ((texto.indexOf(palabra) === -1 )) 
        return false
     else 
        return true
}
console.log(menciona(texto,palabra))