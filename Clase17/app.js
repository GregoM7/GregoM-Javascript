const baseDeDatos = require('./basedatos2');
const miConsole = require('./miConsole');
const obj = {
    numero: 123
}

console.log(baseDeDatos)
console.log('-----');
miConsole.miLog(baseDeDatos);
console.log('-----');
console.log(obj);
console.log('-----');
miConsole.miLog(obj)
