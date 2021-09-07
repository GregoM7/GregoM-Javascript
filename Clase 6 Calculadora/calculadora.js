function Sumar(n1,n2) {
    return n1 + n2;
}
function Restar(n1, n2) {
    return n1 - n2;
}
function Multiplicar(n1, n2) {
    return n1 * n2;
}
function Dividir(n1, n2) {
    return n1/n2;
}
 
console.log("______Sumar dos numeros_____");
console.log(Sumar(2,4));
console.log("______Restar dos numeros_____");
console.log(Restar(2,4));
console.log("______Multiplicar dos numeros_____");
console.log(Multiplicar(2,4));
console.log("______Dividir dos numeros_____");
console.log(Dividir(2,4));
console.log("______Dividir por cero_____");
console.log(Dividir(0,0));
 
function CuadradoDeUnNumero (n) {
    return Multiplicar(n,n);
}
 
function Promedio3Numeros (n1, n2, n3) {
    return Dividir((Sumar(Sumar(n1,n2),n3)),3);
}
 
function CalcularPorcentaje (n1, n2) {
    return Multiplicar(Dividir(n1,100),n2);
}
 
function GeneradorDePorcentaje(n1, n2) {
    return Dividir(Multiplicar(n1,100),n2)
}
 
console.log("______Cuadrado de un numero_____");
console.log(CuadradoDeUnNumero(5));
console.log("______Promedio de 3 numeros_____");
console.log(Promedio3Numeros(3,9.6987455,6));
console.log("______Calculador de porcentaje_____");
console.log(CalcularPorcentaje(300,15));
console.log("______Generador de porcentaje_____");
console.log(GeneradorDePorcentaje(2,200));