let arregloDimension4= [ [50, 60, 70], ["q","%", "$"], ["?", ">", "<"], [1 , -8, -2] ]
// a) Cambiar el elemento % por el elemento ?. Verifique el cambio usando console.log
// b) Cambiar el elemento -8 por el elemento 9. Verifique el cambio usando console.log
// c) Cambiar el elemento 50 por el elemento ¡. Verifique el cambio usando console.log
// d) Eliminar el elemento $. Verifique el cambio usando console.log, imprima todo el arreglo.
// e) Eliminar el elemento 70. Verifique el cambio usando console.log, imprima todo el arreglo.
// f) Eliminar el elemento -2. Verifique el cambio usando console.log, imprima todo el arreglo.
arregloDimension4[1][1] = "?";
console.log(arregloDimension4[1][1])

arregloDimension4[3][1] = 9;
console.log(arregloDimension4[3][1])

arregloDimension4[0][0] ="¡";
console.log(arregloDimension4[0][0])

arregloDimension4[1].splice(2, 1);
console.log(arregloDimension4);

arregloDimension4[0].splice(2, 1);
console.log(arregloDimension4);

arregloDimension4[3].splice(2, 1);
console.log(arregloDimension4);

