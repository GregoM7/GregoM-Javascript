// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// 1. 
const jsonHelper = require(__dirname + "/jsonHelper")
const peliculas = jsonHelper.leerJson("peliculas")



// 2.
const gestionDePeliculas = {
    // 2.A.
    peliculas: peliculas,
    // 2.B.
    listarPeliculas: function (array = this.peliculas) {
        return array.forEach(pelicula => {
            let premio = pelicula.ganoOscar ? 'con premios' : 'sin premio';
            console.log('Titulo: ' + pelicula.titulo + ", Director: " + pelicula.director + ", Duracion: " + pelicula.duracionEnMinutos + ", Clasificacion: " + pelicula.calificacionIMDB + "/10" + ", Premiada: " + premio);
        })
    },
    // 2.C.
    buscarPorId: function (id) {
        return this.peliculas.find(pelicula => pelicula.id === id)
    },
    // 2.D.
    peliculasNoPremiadas: function () {
        let sinPremios = this.peliculas.filter(peliculas => !peliculas.ganoOscar);
        return sinPremios
    },
    // 2.E.
    filtrarPorCalificacion: function (minimo, maximo) {
        let calificadas = this.peliculas.filter(peliculas => peliculas.calificacionIMDB >= minimo && peliculas.calificacionIMDB <= maximo);
        return calificadas
    },
    // 2.F.
    ordenarPorDuracion: function (arrayPeliculas = this.peliculas) {
        return arrayPeliculas.sort((menor, mayor) => mayor.duracionEnMinutos - menor.duracionEnMinutos);
    },
    // 2.G.
    duracionPromedio: function () {
        let minutosTotales = this.peliculas.reduce((acumulador, elemento) => (acumulador + elemento.duracionEnMinutos), 0)
        let promedio = minutosTotales / this.peliculas.length
        console.log("la duracion promedio en minutos de las peliculas es de: " + promedio + "minutos")
    },
    // 2.H.
    premiarPeliculaPorId: function (id) {
        this.buscarPorId(id).ganoOscar = true
        jsonHelper.escribirJson("peliculas", this.peliculas)
        return this.buscarPorId(id)
    },
    // 2.I.
    eliminarPorId: function (id) {
        this.buscarPorId(id)
        if (id === id) {
            let objetoSinPelicula = this.peliculas.splice(id-1,1)
            jsonHelper.escribirJson("peliculas", this.peliculas)
            return objetoSinPelicula
        } 
        return
    }
}
/******************************/
/* Ejecución de las consignas */
/******************************/

console.log("***** 2.B. *****");
//gestionDePeliculas.listarPeliculas()
console.log("****************\n");

console.log("***** 2.C. *****");
console.table(gestionDePeliculas.buscarPorId(7))
console.log("****************\n");

console.log("***** 2.D. *****");
//console.table(gestionDePeliculas.peliculasNoPremiadas())
console.log("****************\n");

console.log("***** 2.E. *****");
//console.table(gestionDePeliculas.filtrarPorCalificacion(5,9))
console.log("****************\n");

console.log("***** 2.F. *****");
//console.table(gestionDePeliculas.ordenarPorDuracion())
console.log("****************\n");

console.log("***** 2.G. *****");
//gestionDePeliculas.duracionPromedio()
console.log("****************\n");

console.log("***** 2.H. *****");
//console.table(gestionDePeliculas.premiarPeliculaPorId(2))
console.log("****************\n");

console.log("***** 2.I. *****");
//console.log(gestionDePeliculas.eliminarPorId(2))
//console.table(gestionDePeliculas.peliculas)
console.log("****************\n");
