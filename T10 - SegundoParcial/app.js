const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

const cartillaProfesionales = {
  profesionales: arrayProfesionales,
  listarProfesional: function (objProfesional) {
    let mensaje =
      "ID: " +
      objProfesional.identificador +
      " Nombre " +
      objProfesional.nombre;
    return mensaje;
  },
  listarProfesionales: function (array) {
    let mensajeRetorno = [];

    for (let i = 0; i < array.length; i++) {
      let mensaje =
        "ID: " + array[i].identificador + " Nombre: " + array[i].nombre;
      +" Honorarios: " + array[i].honorarioConsulta + " edad: " + array[i].edad;
      mensajeRetorno.push(mensaje);
    }

    return mensajeRetorno;
  },
  filtrarDeshabilitados: function (arrayObjetos) {
    let profesionesHabilitados = [];
    for (var i = 0; i < arrayObjetos.length; i++) {
      // const profesional = arrayObjetos[i]
      if (arrayObjetos[i].estaHabilitado === false) {
        //filtro habilitado
        profesionesHabilitados.push(arrayObjetos[i]);
      }
    }
    return profesionesHabilitados;
  },

  habilitarProfesionales: function(arrayObjetos){ //METODO QUE MODIFICA ALGO
  
    for (let i = 0; i < arrayObjetos.length; i++) {
      const profesional = arrayObjetos[i];
      profesional.estaHabilitado = true;
    }
  
    this.guardarCambios()//invocar un metodo del mismo objeto
  },

  guardarCambios() {
    archivos.escribirJson("profesionales", this.profesionales);
  },

};

cartillaProfesionales.habilitarProfesionales(cartillaProfesionales.profesionales)