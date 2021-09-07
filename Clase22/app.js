const archivos = require(__dirname + "/jsonHelper");
let autosCompeticion = archivos.leerJson("autos");

const carrera = {
 autos: autosCompeticion,

 autosPorTanda: 6,

 autosHabilitados: function () {
    return this.autos.filter(auto => auto.sancionado == false)
 },
 
 menosPropiedades: function (autos) {
     return {
     piloto: autos.piloto,
     patente: autos.patente,
     peso: autos.peso,
     velocidad: autos.velocidad,
     sancionado: autos.sancionado ? "sancionado" : 'habilitado',
    }
 },
 listarAutos: function (autos) {
   return autos.map(auto => this.menosPropiedades(auto))
 }
}

console.log(carrera.autosHabilitados())
console.table(carrera.listarAutos(carrera.autos))