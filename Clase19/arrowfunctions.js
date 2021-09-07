// funciones regulares declaradas
function saludo(nombre) {
    return 'Hola ' + nombre + '. Como estas?';
  }
  function suma(num1, num2) {
    return num1 + num2;
  }
  // funciones regulares expresadas
  let saludar = function (nombre) {
    return 'Hola ' + nombre + '. Como estas?';
  };
  let sumar = function (num1, num2) {
    return num1 + num2;
  };
  // comenzamos a pasar a arrow function
  let saludo2 = (nombre) => {
    return 'Hola ' + nombre + '. Como estas?';
  };
  let suma2 = (num1, num2) => {
      return num1 + num2;
  }
  // -------------------------------
  let saludo3 = nombre => {
    return 'Hola ' + nombre + '. Como estas?'
  };
  //--------------------------------
  // finalmente
  let saludoSinParametro = () => "Hola, que tal?"
  let saludoConUnParametro = nombre => 'Hola ' + nombre + '. Como estas?'
  let sumaConMasParametros = (num1, num2) => num1 + num2;