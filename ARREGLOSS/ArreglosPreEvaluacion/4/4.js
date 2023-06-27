// 4. Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en
// él.

let a1=parseFloat(prompt("ingrese el primer numero"));
let a2=parseFloat(prompt("ingrese el segundo numero"));
let a3=parseFloat(prompt("ingrese el tercer numero"));
let a4=parseFloat(prompt("ingrese el cuarto numero"));
let acu=[]
acu.push(a1,a2,a3,a4)
function NumerosPrimos(acu) {
    for (let index = 0; index < acu.length; index++) {
        acu[index]%2!=0
        return console.log(acu);
    }
}
let f= NumerosPrimos(acu)
console.log(f);