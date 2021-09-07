// Ejercicio 2
let usuarios = {
    ndecuenta: 123456,
    tipodecuenta: "Caja de ahorro",
    saldo: 100000,
    titular: "Juan Hernan Gomez",
}
//console.log(usuarios)

function AgregarCuentas(ndecuenta, tipodecuenta, saldo, titular) {
    this.ndecuenta = ndecuenta
    this.tipodecuenta = tipodecuenta
    this.saldo = saldo
    this.titular = titular
}

// Ejercicio 3

let cuenta1 = new AgregarCuentas(5486273622,"Cuenta Corriente",27771,"Abigael Natte")
let cuenta2 = new AgregarCuentas(1183971869,"Caja de Ahorro",8675,"Ramon Connell")
let cuenta3 = new AgregarCuentas(9582019689,"Caja de Ahorro",27363,"Jarret Lafuente")
let cuenta4 = new AgregarCuentas(1761924656,"Caja de Ahorro",32415,"Ansel Ardley")
let cuenta5 = new AgregarCuentas(7401971607,"Caja de Ahorro",18789,"Jacki Shurmer")
let cuenta6 = new AgregarCuentas(630841470,"Cuenta Corriente",28776,"Jobi Mawtus")
let cuenta7 = new AgregarCuentas(4223508636,"Cuenta Corriente",2177,"Thomasin Latour")
let cuenta8 = new AgregarCuentas(185979521,"Caja de Ahorro",25994,"Lonnie Verheijden")
let cuenta9 = new AgregarCuentas(3151956165,"Cuenta Corriente",7601,"Alonso Wannan")
let cuenta10 = new AgregarCuentas(2138105881,"Caja de Ahorro",33196,"Bendite Huggett")


//Ejercicio 4

let listaDeObjetos = [cuenta1,cuenta2,cuenta3,cuenta4,cuenta5,cuenta6,cuenta7,cuenta8,cuenta9,cuenta10]

//Ejercicio 5 y 6

let banco = {
    cliente: listaDeObjetos,
    consultarCliente: function(titular) {
        for (let i = 0; i <= this.cliente.length; i++) {
            if (titular === this.cliente[i].titular) {
                return this.cliente[i]
            }
        }
        return "el usuario no existe"
    }
}


console.log(banco.consultarCliente("Bendite Huggett"))
