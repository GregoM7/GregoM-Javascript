const archivos = require(__dirname + "/lecturaEscrituras");
const ubicacion = "AUTOS"
let autitos = archivos.leerJson(ubicacion);

//console.log(arrayAutos);


const concesionaria = {
    autos: autitos,
    filtrarvendidos: function () {
        const autosVendidos = []
        for (let i = 0; i < this.autos.length; i++) {
            const auto = this.autos[i];
            if (auto.vendido) {
                autosVendidos.push(auto)
            }

        } return autosVendidos
    },
    agregarAuto: function (marca,modelo,anio,precio,patente) {
        const nuevoAuto
        
    }

}

const seVendieron = concesionaria.filtrarvendidos()
console.table(seVendieron)



//const fs = require("fs");


/* const jsonToArray = function (ruta) {
    const datos = fs.readFileSync(ruta, 'utf-8');
    const datosArray = JSON.parse(datos);
    return datosArray
};

const arrayAutos = jsonToArray('./AUTOS.json') */

