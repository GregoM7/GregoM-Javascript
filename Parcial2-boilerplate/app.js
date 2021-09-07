const archivos = require(__dirname + "/lecturaEscritura");
let JsonProfesionales = archivos.leerJson("profesionales");

//objeto literal con props y métodos
const cartillaProfs = {
  profesionales: JsonProfesionales,
  //NO modificar esto
  mostrarUnProfesional: function (profesional) {
    console.table({
      [profesional.identificador]: {
        nombre: profesional.nombre,
        especialidad: profesional.especialidad,
        honorarios: profesional.honorarioConsulta,
        consultas: profesional.cantidadConsultas,
        habilitado: profesional.estaHabilitado,
      },
    });
  },
  listarTodos: function (profesionalesAMostrar) {
    let vista = [];
    for (let i = 0; i < profesionalesAMostrar.length; i++) {
      vista.push(this.traerUnProfesional(profesionalesAMostrar[i]));
    }
    console.table(vista);
  },
  traerUnProfesional: function (profesional) {
    return {
      nombre: profesional.nombre,
      honorarios: "$" + profesional.honorarioConsulta,
      especialidad: profesional.especialidad,
      habilitado: profesional.estaHabilitado,
    };
  },
  //fin de NO modificar

  //tu código a partir de aquí...
  //...
  filtrarHabilitados() {
    let ArrayHabilitados = []
    for (let i = 0; i < this.profesionales.length; i++) {
      if (this.profesionales[i].estaHabilitado === true) {
        ArrayHabilitados.push(this.profesionales[i])
      }

    }
    return ArrayHabilitados
  },
  buscarPorNombre(nombre) {
    let ProfesionalxNombre;
    for (let i = 0; i < this.profesionales.length; i++) {
      if (this.profesionales[i].nombre == nombre) {
        ProfesionalxNombre = this.profesionales[i]
      }

    }
    return ProfesionalxNombre
  },
  incrementarHonorarios(nombre, porcentaje) {
    let ProfesionalesconHonorarios = []
    let ProfesionalElegido = this.buscarPorNombre(nombre)
    for (let i = 0; i < this.profesionales.length; i++) {
      if (ProfesionalElegido.nombre === this.profesionales[i].nombre) {
        ProfesionalesconHonorarios.push(this.profesionales[i])
        this.profesionales[i].honorarioConsulta += (this.profesionales.honorarioConsulta * porcentaje) / 100;
      }


    }
    archivos.escribirJson("profesionales", this.ProfesionalesconHonorarios);
  }


};

console.log("\n****** mostrar todos los profesionales *****");
cartillaProfs.listarTodos(JsonProfesionales);

console.log("\n****** punto 1 ¿cuál es la única propiedad del objeto literal? *****");
// responda aquí: la unica propiedad del objeto literal es profesionales

console.log("\n****** punto 2 ¿cómo se denomina a las funciones dentro de un obj literal? *****");
// responda aquí: las funciones que estan dentro de un objeto literal se llaman Metodos

console.log("\n****** punto 3 mostrar un profesional *****");
const profesional = cartillaProfs.profesionales[5]// un profesional del array a partir de un índice cualquiera
cartillaProfs.mostrarUnProfesional(profesional);

console.log("\n****** punto 4 Listar habilitados ******");
const habilitados = cartillaProfs.filtrarHabilitados(true);
cartillaProfs.listarTodos(habilitados);

console.log("\n****** punto 5 Buscar por Nombre ******")
let nombreBuscado = cartillaProfs.buscarPorNombre('Dina Navarro')
cartillaProfs.mostrarUnProfesional(nombreBuscado)

console.log("\n****** punto 6 Incrementar Honorarios ******")

  .cartillaProfs.incrementarHonorarios
