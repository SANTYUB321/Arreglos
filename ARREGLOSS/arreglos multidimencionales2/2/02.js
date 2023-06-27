let arregloTridimensional=[ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,
    66, 77], [1, 2, 3, 4] ] ];
for (let i = 0; i < arregloTridimensional.length; i++) {

    for (let j = 0; j < arregloTridimensional[i].length; j++) {

        for (let l = 0; l < arregloTridimensional[j].length; l++) {

            console.log(arregloTridimensional[i][j][l])    
        }

    }
    }
    