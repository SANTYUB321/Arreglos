let arregloBidimensional=[ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];
let acum=0
arregloBidimensional.forEach(i=>{
    i.forEach(j=>{
        acum=acum+j
        console.log(acum);
    })
})