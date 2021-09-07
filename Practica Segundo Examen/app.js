const jsonHelper = require(__dirname + "/jsonHelper");

//funcion para leer el archivo json de los departamentos, podes comentarla una vez visto para no generar contenido extra no deseado en la consola.
//console.log(jsonHelper.leerJson("departamentos"));

// Escribí tu codigo a partir de acá.

const deptos = jsonHelper.leerJson("departamentos")

const inmobiliaria = {
    departamentos: deptos,
    listarDepartamentos: function (arrayDptos) {
        for (let i = 0; i < arrayDptos.length; i++) {
            let estado = arrayDptos[i].disponible ? 'Disponible' : 'Alquilado';
            console.log('El id ' + arrayDptos[i].id + '\n' + ' Tiene un precio de alquiler : ' + arrayDptos[i].precioAlquiler + '\n' + ' Y se encuentra : ' + estado + '\n');
        }
    }
    , departamentosDisponibles: function () {
        let ventas = [];
        for (let i = 0; i < this.departamentos.length; i++) {
            if (this.departamentos[i].disponible === true) {
                ventas.push(this.departamentos[i])

            }
        } 
        return ventas
    }
    , buscarPorId: function (id) {
        let apto;
        for (let i = 0; i < this.departamentos.length; i++) {
            if (this.departamentos[i].id == id) {
                apto = this.departamentos[i]
            }
        }
        return apto;
    }
}
