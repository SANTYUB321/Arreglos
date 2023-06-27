// 6. Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
// “Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
// queden en el arreglo que les corresponde. Use ciclos.
let valle = ["Cali" , "Tulua","Cartago","Salento"];
let quindio = ["Cordoba","Armenia", "Palmira", "Circasia"];
let AcumV=[]
let AcumQ=[]
for (let index = 0; index < valle.length; index++) {
    if (valle[index]=="Salento") {
    AcumV=valle.slice(3,4)
    valle.splice(3,1);

    quindio.push(AcumV)
    }

}for (let index = 0; index < quindio.length; index++) {
if (quindio[index]=="Palmira") {
    AcumQ=quindio.slice(2,3)
    quindio.splice(2,1)
    valle.push(AcumQ)
}
    
}
console.log(valle);
console.log(quindio);
