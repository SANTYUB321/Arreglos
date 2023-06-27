// 10. Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se
// encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se
// encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que
// introduzca el arreglo.

function IngresarNombres() {
    let ing=(prompt("ingrese cuantos nombres quiere ingresar"));

let acu=[];
let acum=0
let  nombres=String;
for (let index = 0; index <ing; index++) {
  nombres=prompt("ingrese un nombre");
  acu.push(nombres)
}

for (let index = 0; index < acu.length; index++) {
    for (let i = 0; i < acu[index].length; i++) {
        if (acu[index][i]=="c") {
            acum=acum+1
           }
        
    }


    }

 console.log("en todos los nombre hay",acum,"c"); 
}
IngresarNombres()

