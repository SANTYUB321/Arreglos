// 3. Cree una función que reciba un arreglo de números y retorne el número menor entre todos los
// elementos del arreglo.
let a1=parseFloat(prompt("ingrese el primer numero"));
let a2=parseFloat(prompt("ingrese el segundo numero"));
let a3=parseFloat(prompt("ingrese el tercer numero"));
let a4=parseFloat(prompt("ingrese el cuarto numero"));
let acu=[]
acu.push(a1,a2,a3,a4)
function NumeroMenor(acu) {
    
    for (let index = 0; index < acu.length; index++) {
      if (a1<a2  && a1<a3 && a1<a4) {
        return console.log("el numero menor es",a1);
      }else if(a2<a1  && a2<a3 && a2<a4){
        return console.log("el numero menor es",a2);
      }else if(a3<a1  && a3<a2 && a3<a4){
        return console.log("el numero menor es",a3);
      }else if(a4<a1  && a4<a2 && a4<a3){
        return console.log("el numero menor es",a4);
      }
        
    }
}
let f=NumeroMenor(acu)
console.log(f);
