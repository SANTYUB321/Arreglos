 // 1
console.log("ejercicio 1");
let arreglos= [200, -100, 45, 78, 32];
console.log(arreglos[2]);
console.log(arreglos[4]);
// 2
console.log("ejercicio 2");
let arregloss= [200, -100, 45, 78, 32];
console.log(arregloss[2]);
console.log(arregloss[4]);
// 3
console.log("ejercicio 3");
let aux = [10, true, "k200", 20.7];
aux.forEach(i=>{
    console.log(i);
})
// 4
console.log("ejercicio 4");
let k = [17, 4, 64, 79, 109, 112];
for (let i = 0; i < k.length; i++) {
if (k[i]%2!=0) {
    console.log(k[i]);
}
    }


// 5
console.log("ejercicio 5");
h = [true, true, false,true, false];
k[2]=true;
k[3]=false;
k.forEach(i=>{
    console.log(i);
})
// 6
console.log("ejercicio 6");
let w = ["wc", "jp", "zx", "qr"];
w[2]=true;
w[4]="30";
w.forEach(a=>{
    console.log(a);
})
// 7
console.log("ejercicio 7");
let arreglo= [2, 5, 7, 9] 
arreglo.forEach(q=>{
    console.log(q);
}) 
// 8
console.log("ejercicio 8");
function ingresoArreglo(numero) {
let contador =0;

for( let index=0; index< numero.length; index++){
contador ++;
}
return contador}

let numero= [1,2,3,4,5]
let resultado =ingresoArreglo(numero) 
console.log (resultado);
// 9
console.log("ejercicio 9");
let ar=[30, 44, 54, 89, 100];
let reslt=ar.indexOf(44);
let resl=ar.indexOf(89);
let res=ar.indexOf(70);
console.log(reslt);
console.log(resl);
console.log(res);
// console.log("Segunda parte");
// 1. Imprima el número de elementos de los siguientes arreglos usando la propiedad length
// a) [1,2,3,4,5,6,7,8,9,10]
console.log("ejercicio 1,A");
let array=[1,2,3,4,5,6,7,8,9,10];
for (let index = 0; index < array.length; index++) {
console.log(array[index]);
    
}
// b) []
console.log("ejercicio 1,B");
let arr= []
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
        
    }
// c) ["a", true, -1] 
console.log("ejercicio 1,C");
let arra=["a", true, -1];
for (let index = 0; index < arra.length; index++) {
    console.log(arra[index]);
        
    }
// d) [2, 4, 5, 7, 1, 34, 89, 0]
console.log("ejercicio 1,D");
let aa= [2, 4, 5, 7, 1, 34, 89, 0];
for (let index = 0; index < aa.length; index++) {
    console.log(aa[index]);
        
    }

// 2. Dado el arreglo [1,2,3,4,5,6,7,8,9,10]:
// a) Agregue el elemento 345 usando push y verifique el cambio en el arreglo 
console.log("ejercicio 2,A");
    let o=[1,2,3,4,5,6,7,8,9,10];
    o.push(11,12)
    console.log(o);
// Agregue el elemento true usando push y verifique el cambio en el arreglo
    console.log("ejercicio 2,B");
    let oo=[1,2,3,4,5,6,7,8,9,10];
    oo.push(true);
    console.log(oo);
// c) Agregue el elemento "ADSO" usando push y verifique el cambio en el arreglo
console.log("ejercicio 2,C");
let ooo=[1,2,3,4,5,6,7,8,9,10];
ooo.push("ADSO");
console.log(ooo);
// d) Agregue los elementos 455, 78, false usando push en un solo llamado y verifique el cambio en el arreglo
console.log("ejercicio 2,D");
let oooo=[1,2,3,4,5,6,7,8,9,10];
oooo.push(455,78,false)
console.log(oooo);
// e) Agregue los elementos "ABcd", true, 21 usando push en un solo llamado y verifique el cambio en el arreglo
console.log("ejercicio 2,E");
let e=[1,2,3,4,5,6,7,8,9,10];
e.push("ABcd",true,21);
console.log(e);
// 3. Use splice para hacer las eliminaciones correspondientes:
// a) Dado el arreglo [1, 2, false] Elimine el elemento de índice 2
console.log("ejercicio 3,A");
let rr=[1,2,false];
rr.splice(1,1);
console.log(rr);
// b) Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6
console.log("ejercicio 3,B");
p=[99, false, 17, 45, 7, "abc", 78];
p.splice(6,1);
console.log(p);
// c) Dado el arreglo [-1, -55, -89- 30, 1000] Elimine el elemento de índice 1
console.log("ejercicio 3,C");
pp= [-1, -55, -89- 30, 1000];
pp.splice(1,1);
console.log(pp);
// d) Dado el arreglo ["zxc", 767, 1298, true, false, [3], 1] Elimine los elementos desde el índice 1 hasta el
// índice 4 en un sólo llamado
console.log("ejercicio 3,D");
ppp=["zxc", 767, 1298, true, false, [3], 1];
ppp.splice(1,4)
console.log(ppp);
// Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta el índice 4 en
// un sólo llamado
let pppp=[34, ["q"], 67, 1, 99, 1/2];
pppp.splice(3,2);
console.log(pppp);
// 4. Dado el siguiente arreglo a = [2, 6, 9, 0, 5] , realice una copia dependiente de a.
console.log("ejercicio 4");
Al= [2, 6, 9, 0, 5];
acum=[]
   acum.push(Al)
    console.log(acum);
    console.log(Al);
// 5. Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b.
console.log("ejercicio 5");
let b = ["abc", 4, 88, 99];
// 6. Dado el siguiente arreglo ["x", "y", "z", 0, 1, 2, 3] use ciclo for (con .length) para recorrer el arregloe imprimir
// todos sus elementos
console.log("ejercicio 6");
let c=["x", "y", "z", 0, 1, 2, 3];
for (let index = 0; index <c.length; index++) {
   console.log(c[index]);
    
}
// 7. Dado el siguiente arreglo [1, 17, 8, 9, 3] use ciclo for (con .length) para recorrer el arreglo e imprimir todos sus elementos aumentados en 1
console.log("ejercicio 7");
let cc=[1, 17, 8, 9, 3];
for (let index = 0; index < cc.length; index++) {
let ac=cc[index]+1;
console.log(ac);
    
}
// 8. Cree una función que reciba un arreglo y retorne su longitud(número de elementos) 
console.log("ejercicio 8");
function ingresoArreglo(numero) {
let contador =0;

for( let index=0; index< numero.length; index++){
contador ++;
}
return contador}

let numeroo= [1,2,3,4,5]
let resultadoo =ingresoArreglo(numero) 
console.log (resultado);
// 9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún elemento del siguiente arreglo ["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema
console.log("ejercicio 9");
let er=["a", "b", "c", "d", "e", "f", "g"];
let ing=prompt("ingrese una letra del abecedario")
function IngreseLetra(array) {
    for (let index = 0; index < er.length; index++) {
        if (er[index]==ing) {
           return console.log("su letra esta en el arreglo");
        } 
        }
        return console.log("su letra no esta en el arreglo");
}
let ii=IngreseLetra(array)
console.log(ii);
console.log("Seccion Tres");
// Dado el arreglo [3, 50, 70, 600, 40]:
// 1. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos
console.log("S3 ejercicio 1");
let i=[3, 50, 70, 600, 40];
i.forEach(a => {
    console.log(a);
});
// 2. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3
console.log("S3 ejercicio 2");

let iii=[3, 50, 70, 600, 40];
iii.forEach(a => {
    let acc=a*3
    console.log(acc);
});
// 3. Use ciclo while para recorrer el arreglo e imprimir todos sus elementos
console.log("S3 ejercicio 3");
let=index=0
let il=[3, 50, 70, 600, 40];
while (index<il.length) {
    console.log(il[index]);
    index++
}
// 4. Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar cuales elementos son pares

// 5. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un condicional para mostrar si el nombre Juan se encuentra dentro del arreglo
console.log("S3 ejercicio 5");
ab=["Maria", "Pedro", "Juan", "Pablo", "Diana"];
for (let index = 0; index < ab.length; index++) {
   if (ab[index]=="Juan") {
    console.log("si esta Juan");
   }
}
// 6. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un condicional, y una variable contador(iniciela fuera del ciclo y úsela para almacenar las veces que aparece Maria en el arreglo) para mostrar cuántas veces aparece el nombre Maria
console.log("S3 ejercicio 6");
let ac=["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let acuum=0;
for (let index = 0; index < ac.length; index++) {
    if (ac[index]=="Maria") {
        acuum++
    }
    
}console.log("Maria aparece ",acuum,"veces en el arreglo");
// 7. Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para mostrar la suma de
// sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa la variable contadora
console.log("S3 ejercicio 7");
let ad=[15, 7, 9, 12, 1];
let count=0
ad.forEach(e => {
    count=count+e
    console.log(count);
});
// 8. Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para mostrar la suma de los cuadrados de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver cómo se implementa la variable contadora
console.log("S3 ejercicio 8");
let ae=[-2, 8, 99, 1, 7];
let conta=0;
let conta1=0;
ae.forEach(f => {
    conta=f*3;
    conta1=conta1+conta
console.log(conta1);
console.log(conta);
});
// 9. Dado el arreglo [true, true, false, true, false, false] use ciclo while y una variable contadora(diferente al contador del ciclo) para mostrar cuántas veces aparece false en el arreglo. Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa la variable contadora.
console.log("S3 ejercicio 9");
let letras = [true, true, false, true, false, false];
let indicee=0;
let suma=0
while (indicee<letras.length) {
    indicee++
    if (letras[indicee]===false) {
        suma=suma+1
    }
}
console.log("El arreglo contiene ",suma,"veces la palabra false")
// 10. Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use ciclo for para inspeccionar los elementos del arreglo y mostrar si con tales elementos sería posible formar la palabra adso.
console.log("S3 ejercicio 10");
let adso= ["z", "p", "s", "z", "o", "b", "a", "w","d"];
let adso2="adso"
for (let indexx = 0; indexx < adso2.length; indexx++) {  
for (let index = 0; index < adso.length; index++) {
if (adso[index].includes(adso2[indexx])) {
    console.log("La cadena contiene la palabra ADSO");
}
}
}

// 11. Dado el arreglo [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] use ciclo for para mostrar la tabla del 5 del 10 al 20 , p.e (5x10, 5x11...)
console.log("S3 ejercicio 11");
let multiplicados=[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let cinco
for (let index = 0; index < multiplicados.length; index++) {
cinco=multiplicados[index]*5
console.log("La multiplicacion es ",multiplicados[index],"*5, y el resultado es ",cinco);    
}
// 12. Dado el arreglo [5, 7, 90, 2, 5, 3, 8, 99] use dos ciclos forEach(una dentro del otro) para determinar cuales numeros con consecutivos con otros, p.e. dos a y b son consecutivos si a + 1 = b, p.e. 10 y 11 son consecutivos porque 10 + 1 = 11, 20 y 21 son consecutivos porque 20 + 1 = 21.
console.log("Parte 12");
let numeroContinuos=[5, 7, 90, 2, 5, 3, 8, 99];
let ah
let bb
numeroContinuos.forEach((ah)=>{
numeroContinuos.forEach((bb)=>{
    if (aa+1==bb) {
        console.log(aa,bb);
    }
})
})