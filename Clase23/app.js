// 1. Obtener el listado de posibles participantes
const jsonHelper = require(__dirname + "/jsonHelper")
const bicicletas = jsonHelper.leerJson("bicicletas")

// 2. Crear un objeto literal que represente la carrera
const carreraBicicletas = {
    // 2.A. Agregar una propiedad llamada bicis que contenga los autos obtenidos en el punto anterior.
    bicicletas: bicicletas,
    // 2.B. Agregar una propiedad llamada bicicletaPorTanda que contenga el valor 6. Este valor representará la cantidad máxima de autos por tanda.
    bicicletasTanda: 4,
    // 2.C. Agregar un método ciclistasHabilitados, que retorne todos los ciclistas habilitados, es decir, aquellos que no estén sancionados.
    ciclistasHabilitados: function () {
        return this.bicicletas.filter(bici => !bici.dopaje)
    },
    // 2.D. Agregar un método listarBicicletas que reciba como parámetro un array de bicis e imprima por consola la siguiente información:
    listarBicicletas: function (array = this.bicicletas) {
        return array.forEach(bicicleta => {
            let estado = bicicleta.dopaje ? 'inhabilitado' : 'habilitado';
            console.log('ciclista: ' + bicicleta.ciclista + ", Peso: " + bicicleta.peso + ", Largo: " + bicicleta.largo + ", Estado: " + estado);
        })
    },
     // 2.E. Agregar un método buscarPorId que permita buscar el ciclista en función de su id.
    buscarPorId: function (id) {
       return this.bicicletas.find(bici => bici.id === id)
    },
    // 2.F. Agregar un método buscarPorRodado que permite filtrar las bicis habilitadas, siempre y cuando su propiedad rodado sea  igual a la rodado enviada como argumento.
    buscarPorRodado: function (numeroRodado) {
        return this.ciclistasHabilitados().filter(bicicleta => bicicleta.rodado === numeroRodado)
    },
    // 2.G. Agregar un método ordenarPorRodado que ordene las bicis de menor a mayor según su rodado.
    ordenarPorRodado: function () {
        return  this.bicicletas.sort((bicicletaA, bicicletaB)=> bicicletaA - bicicletaB)
    }
}









//console.log(carreraBicicletas.ciclistasHabilitados())
//carreraBicicletas.listarBicicletas();
//console.table(carreraBicicletas.buscarPorId(5))
//console.table(carreraBicicletas.buscarPorRodado(28))
