let electronicos = [
    { nombre: 'iPad Pro 12"', precioEnUsd: 2200, cantVendidos: 15 },
    { nombre: "Macbook Air", precioEnUsd: 1500, cantVendidos: 20 },
    { nombre: "Macbook Pro", precioEnUsd: 3000, cantVendidos: 7 },
    { nombre: "iPhone X", precioEnUsd: 650, cantVendidos: 150 },
    { nombre: "iPhone 12", precioEnUsd: 1200, cantVendidos: 100 },
];

// Ejercicio 1 

let gananciaTotal = electronicos => {
    electronicos.map(function (precioEnUsd, cantVendidos) {
        return precioEnUsd * cantVendidos

    })

    //return sumaDeProducto.reduce(acum, num)
}
const tiendaElectronica = {
    productos: electronicos,
    gananciaTotal: function (array) {
        const res = array.map(function(electronico) {
            return electronico.precioEnUsd * electronico.cantVendidos;
        })
        return res.reduce((acumulador, unNumero) => acumulador + unNumero);
    },
    filtrarPorVendidos: function (cantidad) {
        return this.productos.filter(objeto => objeto.cantVendidos >= cantidad)
    },
    aumentarPrecio: function (porcentajeAumento) {
        let aumentados = this.productos.map(producto => producto.precioEnUsd + (producto.precioEnUsd / 100) * porcentajeAumento)
        return aumentados
    }

}

console.log(tiendaElectronica.aumentarPrecio(20))
console.log();