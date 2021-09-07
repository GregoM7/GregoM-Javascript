function esperar(ms) {
  let d = new Date();
  let d2 = null;
  do { d2 = new Date(); }
  while (d2 - d < ms);
}
const mascota = {
    nombre: 'Anita',
    vivo: true,
    edad: 0,
    energiaVital: 7,
    hambre: 3,
    felicidad: 5,
    entrenamiento: 5,
    peso: 10,
    social: 3,
    tipo: 's',
    capital: 0,
    vivir: function () {
        this.edad++;
        this.energiaVital--;
        this.hambre += 2;
    },
    status: function () {
        console.log('la edad de ' + this.nombre + ' es ' + this.edad + '\n la energia vital es ' + this.energiaVital + '\n el hambre es ' + this.hambre+ '\n la felicidad es de: '+ this.felicidad+
        '\n el entrenamiento es de: '+ this.entrenamiento+'\n el nivel social es de: '+this.social+'\n el peso es de: '+ this.peso+ '\n el dinero es de: ' +this.dinero)
    },
    comer: function() {
        this.hambre--;
        this.energiaVital++;
        this.peso++;
        this.felicidad++;
        
    },
    sigueConVida: function () {
        return this.hambre <= 5 && this.hambre >= 0
        && this.peso > 0 
        && this.energiaVital > 0
    },
    pasear: function () {
        this.entrenamiento++;
        this.felicidad++;
        this.energiaVital--;
        this.hambre++;
        this.peso--;
        this.social++;
    },
    laburar: function () {
        this.felicidad--;
        this.dinero+= 3;
        this.energiaVital--;
        this.social--;
        this.peso--;
    },
    salirDeFiesta: function () {
        this.felicidad++;
        this.dinero-= 2;
        this.energiaVital--;
        this.social++;
    },
    dormir: function () {
        this.energiaVital += 3;
        this.felicidad++;
    }

}

while (mascota.sigueConVida()) {
    mascota.vivir();
    mascota.comer();
    mascota.laburar();
    mascota.comer();
    mascota.pasear();
    mascota.salirDeFiesta();
    mascota.comer();
    mascota.dormir();
    mascota.status();
    esperar(600)
}
console.log(mascota.nombre+' hizo la suicidacion')
