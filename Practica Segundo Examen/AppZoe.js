const jsonHelper = require(__dirname + "/jsonHelper");

//funcion para leer el archivo json de los departamentos, podes comentarla una vez visto para no generar contenido extra no deseado en la consola.
const dptosJson = jsonHelper.leerJson("departamentos");
//console.log(dptosJson);

// Escribí tu codigo a partir de acá.
// Ejercicio 2
const inmobiliaria = {
    departamentos: dptosJson,

    listarDptos: function (array){

        for (let i = 0; i < array.length; i++){
            let id = array[i].id; 
            let precioAlquiler = array[i].precioAlquiler;
            let disponible = array[i].disponible;

            /* Se puede hacer con un ternadio, sin crear disponible
            const habilidato = array [i].disponible ? "Disponible" : "Alquilado"
            y en vez de disponible, saco habilidado*/
            
            if (disponible === true){
                disponible = "Disponible";
            } else disponible = "Alquilado";

            console.log ("Id del dpto: " + id + ", precio del alquiler: $" + 
            precioAlquiler + ", estado: " + disponible);
        }
        /*return 0; Esto es si yo llamo al metodo desde un
        console.log*/
    },

    dptosDisponibles: function (){

        let arrayDisponible = [];

        for(let i = 0; i < this.departamentos.length; i++){

            if(this.departamentos[i].disponible === true){
                arrayDisponible.push(this.departamentos[i]);
                
            }
        }
        
        
        return arrayDisponible;
    },

    buscarPorId : function (identificador){

        let deptoEncontrado;

        for(let i = 0; i < this.departamentos.length; i++){

            if(this.departamentos[i].id === identificador){
                deptoEncontrado = this.departamentos[i];
                
            }
        }
        
        return deptoEncontrado;
    },

    buscarPorPrecio: function (precioMax){
        let arrayPrecios = [];

        let arrayDptosDisponible = this.dptosDisponibles(); //Llamo al metodo que hice en el punto C

        for(let i = 0; i < arrayDptosDisponible.length; i++){

            if(arrayDptosDisponible[i].precioAlquiler <= precioMax){

                    arrayPrecios.push(arrayDptosDisponible[i]);

            }
        }

        return arrayPrecios;
    },

    precioConImpuesto: function (impuesto) {
        let dptosConImpuestos = [];

        for(let i = 0; i < this.departamentos.length; i++){

            dptosConImpuestos.push(this.departamentos[i]);
            dptosConImpuestos[i].precioAlquiler = dptosConImpuestos[i].precioAlquiler + (this.departamentos[i].precioAlquiler * impuesto) /100;

            }
            return dptosConImpuestos;
    },
    
    alquilar: function (identificador) {
        
        for(let i = 0; i < this.departamentos.length; i++){

            if(this.departamentos[i].id === identificador){
                this.departamentos[i].disponible = false;
            }
        }
        jsonHelper.escribirJson("departamentos", this.departamentos);

    }

}

/*Invocacion de mi metodo*/
// Ejercicio B
inmobiliaria.listarDptos(dptosJson);

// Ejercicio C
let arrayDptosDisponibles = inmobiliaria.dptosDisponibles();

console.log ( "Lista de departamentos disponibles: ");
console.log (arrayDptosDisponibles);

// Ejercicio D
let identificador = 4;
let dptoId = inmobiliaria.buscarPorId(identificador);

console.log ("Caracteristicas del departamento solicitado: ");
console.log (dptoId);

//Ejercicio E
let precioMax = 2000;
let dptosBaratos = inmobiliaria.buscarPorPrecio(precioMax);

console.log ("Departamentos disponibles con precio menor a $" + precioMax + ": ");
console.log (dptosBaratos);

//Ejercicio F
let impuesto = 10;
let dptosImpuesto = inmobiliaria.precioConImpuesto(impuesto);

console.log ("Lista de departamentos con aumento: ");
console.log (dptosImpuesto);

// Ejjercicio G
inmobiliaria.alquilar(14);

