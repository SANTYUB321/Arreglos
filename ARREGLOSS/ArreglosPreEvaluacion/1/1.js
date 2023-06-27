// 1. Dado el arreglo [1,2,3,4,5,6]:
// a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
console.log("Ejercicio 1,A");
let array=[1,2,3,4,5,6];
let i=0
while (i<array.length) {
    console.log(array[i]);
    i++
}
// b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
console.log("Ejercicio 1,B");
let arrayy=[1,2,3,4,5,6];
for (let index = 0; index < arrayy.length; index++) {
    console.log(arrayy[index]);
    
}
// c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
console.log("Ejercicio 1,C");
let aray=[1,2,3,4,5,6];
let CopyArray= aray.slice()
let ac=0
for (let index = 0; index < CopyArray.length; index++) {
    ac= CopyArray[index]+1
    console.log(ac);
}
// d) Calcular el promedio de todos los elementos del arreglo
console.log("Ejercicio 1,D");
let aay=[1,2,3,4,5,6];
let acum=0;
for (let index = 0; index < aay.length; index++) {
acum=acum+aay[index]
}
acum=acum/6;
console.log(acum);
