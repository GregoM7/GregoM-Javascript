function total_a_pagar(vehiculo,litrosConsumidos){
    let precio;
    switch (vehiculo){
        case "autobus":
             precio=55;
             break;
        case "moto":
             precio=70;
             break;
        case "coche":
             precio=86;
            break;   
    }
    if (0<=litrosConsumidos<=25){
        return litrosConsumidos*precio+50;
    }else if(litrosConsumidos>25){
        return litrosConsumidos*precio+25;
    }
}
console.log(total_a_pagar("autobus",35));

// Ejercicio TOTAL A PAGAR//

