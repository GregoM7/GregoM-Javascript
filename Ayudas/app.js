const archivos = require(__dirname + "/jsonHelper");
let jsonBici = archivos.leerJson("bicicletas");

const carrera = {
  bicicletas: jsonBici,
  bicicletasPorTanda: 4,

  ciclistasHabilitados: function () {
    return this.bicicletas.filter((bicis) => bicis.dopaje === false);
  },
  listarBicicletas: function (array) {
    return this.bicicletas.forEach((array) => {
      let habilitados = array.dopaje ? "inhabilitado" : "habilitado";
      console.log(
        "Ciclista: " + array.ciclista,
        "marca: " + array.marca,
        "rodado: " + array.rodado,
        "peso: " + array.peso + "kg",
        "largo: " + array.largo + "cm",
        "estado : " + habilitados
      );
    });
  },
  buscarPorId: function (id) {
    return this.bicicletas.find((bicis) => bicis.id === id);
  },
  buscarPorRodado: function (rodado) {
    let habilitados = this.ciclistasHabilitados();
    return habilitados.filter((bici) => bici.rodado === rodado);
  },
  ordenarPorRodado: function () {
    return this.bicicletas.sort((rodA, rodB) => rodA.rodado - rodB.rodado);
  },
  generarTanda: function (rodado, peso) {
    let tanda = this.buscarPorRodado(rodado);
    return tanda.filter((array) => array.peso <= peso).slice(0,this.bicicletasPorTanda);
  },
  calcularPodio: function (tanda) {
    let tandaMayorMenor = tanda.sort((a, b) => b.puntaje - a.puntaje);
    let primero = tandaMayorMenor[0];
    let segundo = tandaMayorMenor[1];
    let tercero = tandaMayorMenor[2];

    console.log(
      "El ganador es: " + primero.ciclista + ",con un puntaje de: " + primero.puntaje
    );
    console.log(
      "El segundo puesto es para : " +
        segundo.ciclista +
        ",con un puntaje de: " +
        segundo.puntaje
    );
    console.log(
      "El Tercer puesto es para : " +
        tercero.ciclista +
        ",con un puntaje de: " +
        tercero.puntaje
    );
  },

  /*Suma los 3 primeros del podio*/
sumarPorPuntaje: function (rodado,peso){
  let podio = this.generarTanda(rodado, peso).sort((a,b)=> b.puntaje-a.puntaje).slice(0,3);
  return podio.reduce((acom,p)=> acom + p.puntaje,0)
},
/*Reemplazar los 24 por 15*/
remplazoRodado : function(par,cambio){
 this.bicicletas.forEach((bicis)=>bicis.rodado ==par ? bicis.rodado=cambio: bicis.rodado); 
/* reescribo archivos.escribirJson("bicicletas",this.bicicletas)*/
},
reemplazoRodadoId : function(id,nuevorodado){
 this.buscarPorId(id).rodado=nuevorodado
/*return this.buscarPorId(id)*/
}

};
/*Consoles*/
 
console.log("----habilitados--------------------")
console.log(carrera.ciclistasHabilitados());
console.log("----Listado--------------------")
console.log(carrera.listarBicicletas(carrera.bicicletas));
console.log("----id-------------------")
console.log(carrera.buscarPorId(4));
console.log("----Rodado--------------------")
console.log(carrera.buscarPorRodado(24));
console.log("----Ordenar por Rodado--------------------")
console.log(carrera.ordenarPorRodado());
console.log("----Generar tanda--------------------")
console.log(carrera.generarTanda(24,200));
console.log("----Calcular podio--------------------")
carrera.calcularPodio(carrera.generarTanda(24,200));
console.log()
/*Sumar por Puntaje*/
console.log("----Calcular Suma Puntaje--------------------")
console.log(carrera.sumarPorPuntaje(24,200))
/*ReemplazoRodadoId no devuelve nada lo hace el Id Remplazo*/
console.log("----Calcular reemplazoId--------------------")
carrera.reemplazoRodadoId(5,90)
/*Buscar el Id Reemplazado*/
console.log("----Calcular Buscar Id REEMPLAZADO--------------------")
console.log(carrera.buscarPorId(5))
/*console.table(carrera.reemplazoRodadoId(5,90))*/


