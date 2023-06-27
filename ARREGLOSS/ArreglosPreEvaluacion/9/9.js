// 9. Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un
// promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos.
let ing=parseFloat(prompt("ingrese cuantos numero quiere para el primer promedio"));

let acu=[];
let acum=0

for (let index = 0; index <ing; index++) {
 let numeros=parseFloat(prompt("ingrese un numero"));
 acum=acum+numeros/ing
}
acu.push(acum);
console.log(acu);
let ing2=parseFloat(prompt("ingrese cuantos numero quiere para el segundo promedio"));
let acu2=[];
let acum2=0

for (let index = 0; index <ing2; index++) {
    let numeros=parseFloat(prompt("ingrese un numero"));
    acum2=acum2+numeros/ing2
   }
   acu2.push(acum2);
   console.log(acu2);

   if (acu>acu2) {
    console.log("el promedio mayor es",acu);
   }else if(acu2>acu){
    console.log("el promedio mayor es",acu2);
   }