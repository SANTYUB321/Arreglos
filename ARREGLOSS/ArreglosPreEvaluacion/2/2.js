// 2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
// cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
// (cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
// elementos del arreglo.
let cadenaADN=['AATGAAC', 'GTTTTTC', 'GGTAAA', 'CCCCATGGG']
let A=""
let G=""
let C=""
let T=""
for (let index = 0; index < cadenaADN.length; index++) {
let Cadena=cadenaADN[index]
for (let index2 = 0; index2 < Cadena.length; index2++) {
let base=Cadena[index2]
    if (base==='A') {
        A=A+"A"
    }else if (base==='G') {
        G=G+"G"
    }else if (base==='C') {
        C=C+"C"
    }else if (base==='T') {
        T=T+"T"
    }
}
}
console.log("Esta conformada por: ",A);
console.log("Esta conformada por: ",G);
console.log("Esta conformada por: ",C);
console.log("Esta conformada por: ",T);