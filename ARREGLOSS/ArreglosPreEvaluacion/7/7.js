// 7. Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,
    // “Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y
    // verduras) queden en el arreglo que les corresponde. Use ciclos.
    let verduras = ["Pera", "Cebolla","Limón","Pimentón"];
    let acumF=[]
    let Frutas = ["Manzana","Banano", "Lechuga","Perejíl"];
    let acumV=[]
    for (let index = 0; index < verduras.length; index++) {
        if (verduras[index]=="Pera"){
            Fruta=verduras.slice(0,1)
        verduras.splice(0,1);
    Frutas.push(acumF)
    }
    if (verduras[index]=="Limón") {
        acumF=verduras.slice(1,2)
        verduras.splice(1,1);
    Frutas.push(acumF)
    }
}
 

for (let index = 0; index < Frutas.length; index++) {
if (Frutas[index]=="Lechuga") {
    acumV=Frutas.slice(2,3)
    Frutas.splice(2,1);
verduras.push(acumV)
}
if (Frutas[index]=="Perejíl") {
    acumV=Frutas.slice(2,3)
    Frutas.splice(2,1);
verduras.push(acumV)
}

}
console.log(verduras);
console.log(Frutas);