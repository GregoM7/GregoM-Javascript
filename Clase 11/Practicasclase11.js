// Ejercicio 1
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "lavida es bella"]
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function peliculasAMayus(pelis) {
    for (let i = 0; i < pelis.length; i++) {
        pelis[i] = pelis[i].toUpperCase();
    }
    console.log(pelis)
}
//peliculasAMayus(peliculas);

//Ejercicio 2

function pasajeDeElementos(array1,array2) {
    for (let i = 0; i < array1.length; i++) {
        array1.push(array2.toUpperCase())
        
    }
}

pasajeDeElementos(peliculas, peliculasAnimadas)