// 12. Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por las
// letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número
// de Timina (T). Se le debe pedir al usuario que introduzca los arreglos.

let ing=(prompt("ingrese cuantas cadenas quiere que tenaga su arreglo"));
let cadenaADN
let acuC=[]

for (let index = 0; index <ing; index++) {
  cadenaADN=String( prompt("ingrese una cadena de adn"));
  acuC.push(cadenaADN)
}
let acum=0
for (let index = 0; index < acuC.length; index++) {

for (let index2 = 0; index2 < acuC[index].length; index2++) {
if (acuC[index][index2]=="T") {
acum=acum+1
  
}
}
}

console.log("el arreglo tine",acum,"T");