let arregloTridimensional=[ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,
    66, 77], [1, 2, 3, 4] ] ];

arregloTridimensional.forEach(i=>{
    i.forEach(j=>{
        j.forEach(k=>{
            console.log(k);


        })
    })
})