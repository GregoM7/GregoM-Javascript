const jsonHelper = require(__dirname + "/jsonHelper");
let JsonTrabajadores = jsonHelper.leerJson("trabajadores");
//objeto literal con props y métodos
const catalogTrabajadores = {
  trabajadores: JsonTrabajadores,
  //NO modificar esto
  mostrarUnTrabajador: function (trabajador) {
    console.table({
      [trabajador.id]: {
        nombre: trabajador.nombre,
        oficio: trabajador.oficio,
        honorarios: trabajador.precioConsulta,
        consultas: trabajador.consultasRealizadas,
        matriculado: trabajador.matriculado,
      },
    });
  },
  listarTodos: function (trabajadoresAMostrar) {
    let datos = [];
    for (let i = 0; i < trabajadoresAMostrar.length; i++) {
      datos.push(this.traerUnTrabajador(trabajadoresAMostrar[i]));
    }
    console.table(datos);
  },
  traerUnTrabajador: function (trabajador) {
    return {
      nombre: trabajador.nombre,
      honorarios: "$" + trabajador.precioConsulta,
      oficio: trabajador.oficio,
      matriculado: trabajador.matriculado,
      rating: trabajador.rating,
      id: trabajador.id
    };
  },
  //fin de NO modificar
  //tu código a partir de aquí...
  filtrarPorRating: function (ratingMinimoDeseado) {
    let resultado = [];
    for (let i = 0; i < this.trabajadores.length; i++) {
      if (this.trabajadores[i].rating >= ratingMinimoDeseado) {
        resultado.push(this.trabajadores[i])
      }
    } return resultado

  },
  buscarPorId: function (id) {
    let SoloTrabajador
    for (let i = 0; i < this.trabajadores.length; i++) {
      if (this.trabajadores[i].id === id) {
        SoloTrabajador = this.trabajadores[i]
      }


    } return SoloTrabajador

  },
  incrementarConsultasRealizadas: function (id, consultas) {
    let profesional = this.buscarPorId(id);
    profesional.consultasRealizadas = profesional.consultasRealizadas + consultas;
    jsonHelper.escribirJson("trabajadores", this.trabajadores)
    return profesional



  }
}

console.log("\n****** mostrar todos los trabajadores *****");
catalogTrabajadores.listarTodos(JsonTrabajadores);

console.log(
  "\n****** punto 1 ¿cuál es la única propiedad del objeto literal? *****"
);
// responda aquí: la unica propiedad es el Array de trabajadores

console.log(
  "\n****** punto 2 ¿cómo se denomina a las funciones dentro de un obj literal? *****"
);
// responda aquí: Se les denomina Metodos

console.log("\n****** punto 3 mostrar un trabajador *****");
const trabajador = JsonTrabajadores[3] // un trabajador del array a partir de un índice cualquiera (a modo de ejemplo para probar el metodo)
catalogTrabajadores.mostrarUnTrabajador(trabajador);

console.log("\n****** punto 4  ******");
const arrayResultado = catalogTrabajadores.filtrarPorRating(2)
catalogTrabajadores.listarTodos(arrayResultado)


console.log("\n****** punto 5 ******");

let trabajorDesignado = catalogTrabajadores.buscarPorId(4)
catalogTrabajadores.mostrarUnTrabajador(trabajorDesignado)

console.log("\n****** punto 6 ******");
catalogTrabajadores.incrementarConsultasRealizadas(10,5)
