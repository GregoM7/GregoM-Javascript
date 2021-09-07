/* ==========================
DE ASIGNACIÓN
========================== */

// El operador "=" sirve para asignar el valor 40 a una variable llamada "edad"

let edad = 40

/* ==========================
ARITMÉTICOS
========================== */

// Nos permiten hacer operaciones matemáticas

10 + 15 //---> Suma
10 - 15 //---> Resta
10 * 15 //---> Multiplicación
10 / 15 //---> División
15++    //---> Incremento de uno en uno: 15 + 1
15--    //---> Decremento de uno en uno: 15 - 1
15 % 5  //---> Módulo. El resto obtenido de dividir 15 entre 5: 0
15 % 2  //---> Módulo. El resto obtenido de dividir 15 entre 2: 1

/* ==========================
DE COMPARACIÓN SIMPLE
========================== */
10==10 //---> True mismo valor
10==15 //---> False distinto valor

/* ==========================
DE DESIGUALDAD SIMPLE
========================== */
10!=15 //---> True distinto valor

/* ==========================
DE COMPARACIÓN ESTRICTA
========================== */
10=== "diez" //---> False mismo valor pero distinto dato) 
"diez"==="diez" //---> True

/* ==========================
DE DESIGUALDAD ESTRICTA
========================== */
11!== "once"//---> True es distinto dato
11!==11 //---> False no hay ninguna desigualdad

/* ==========================
OPERADORES RELACIONALES
========================== */
7>4   //---> mayor que ( > ),
4<7   //---> menor que ( < ), 
7>=2  //---> mayor o igual ( >= ), 
2<=7  //---> menor o igual ( <= ),
4==4  //---> igual que ( == ) 
4!= 3 //---> distinto de ( != ).
/* ==========================
LÓGICOS
========================== */
let dia = "domingo";
let clima = "soleado";
Dia=="domingo"&& clima=="soleado" //---> && Todos deben ser verdaderos

8>=15||8!=13||//---> Or uno debe ser verdadero para que todo sea verdadero
!(20>15) //---> Not Si era verdadero pasa a falso y viceversa
// Permiten combinar valores booleanos y su resultado a la vez también es un booleano
 let num = 0;
 console.log(--num)

