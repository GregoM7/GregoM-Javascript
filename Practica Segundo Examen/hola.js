let arrayX = ["www.hola.com", "www.chau.com"]

let agregarHttp = url => "http://" + url;
//console.log(agregarHttp('www.logg.com'))

function procesar (array, callback) {
    let arraytransformado = []
    for (let i = 0; i < array.length; i++) {
        arraytransformado.push(callback(array[i]))
    }
    return arraytransformado
}
console.log(procesar(arrayX, agregarHttp))