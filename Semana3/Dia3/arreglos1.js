// // // var nombres = ["J","X","V","M"]
// // // var saludos = []

// // // for(var cont = 0 ; cont < nombres.length; cont++){
// // //     saludos[cont] = "Saludos " + nombres[cont];
// // // }
// // // console.log(saludos);

// // // //////
// // // var apellidos = ["Garnica","Monje","Salinas"]
// // // var salarios = [3000,7000,2500]
// // // var cargos = ["Gerente","Jefe de Proyecto","Caja"]

// // // for(var cont = 0 ; cont < apellidos.length; cont++){
// // //     console.log(apellidos[cont] + " gana " + salarios[cont] + " en el cargo de " + cargos[cont]);
// // // }


// // ////////
// // var salario = [["Garnica","Monje","Salinas"],
// //                 [3000,7000,2500],
// //                 ["Gerente","Jefe de Proyecto","Caja"]]

// // for(var cont = 0 ; cont < salario.length; cont++){
// //     console.log(salario[0][cont] + " gana " + salario[1][cont] + " en el cargo de " + salario[2][cont]);
// // }

// ////////
// var s1 = [[10,50,60],
//             [30,70,250],
//             [80,4,8]];

// var s2 = [[10,50,60],
//             [30,70,250],
//             [80,4,8]]; 

// //var s3 = s1.slice(0);
// //console.log(s3);

// var s3 = new Array(s1.length);         

// for(var otro = 0 ; otro < s1.length; otro++){

//     s3[otro] = new Array(s1[otro].length);

//     for(var cont = 0 ; cont < s1[otro].length; cont++){

//         s3[otro][cont] = s1[otro][cont] + s2[otro][cont];

//     }
// }
// console.log(s3);


// //////////////////////////////
// var s1 = [  [10,50,600],
//             [30,70,250],
//             [30,70,250],
//             [30,70,250]
//         ];


// sr = []
// for(var cont = 0 ; cont < s1[0].length; cont++){  //cont = columna
//     sr[cont] = []
//     for(var otro = 0 ; otro < s1.length; otro++){ //otro = fila
//         sr[cont][otro] = s1[otro][cont]
//     }    
// }
// console.log(sr);


// //////////////////////////////5.12
// var s1 = [  [-10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,50,600],
//             [-10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,30,70,250],
//             [-10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,30,70,250],
//             [-10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,30,70,250],
//             [-10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,50,600],
//             [-10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,30,70,250],
//             [-10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,30,70,250],
//             [-10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,30,70,250],
//             [-10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,50,600],
//             [-10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,30,70,250],
//             [-10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,30,70,250],
//             [-10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,30,70,250]
//         ];

// // for(var cont = 0 ; cont < s1.length; cont++){  //cont = fila
// //     for(var otro = 0 ; otro < s1[0].length; otro++){ //otro = columna
// //             s1[cont][otro] =  -1 + Math.round(Math.random()) * 2;
// //     }    
// // }      
// // console.log(s1);

// for(var cont = 0 ; cont < s1.length; cont++){
//     for(var otro = 0 ; otro < s1[0].length; otro++){
//         if(s1[cont][otro]<0){
//             s1[cont][otro] = 0;
//         }
//     }    
// }
// console.log(s1);

// ///////////
////////
var s1 = [  [1,2],
            [-1,0],
            [-3,-1]];

var s2 = [  [2,0,1],
            [-5,2,3]]; 

//var s3 = s1.slice(0);
//console.log(s3);

var s3 = new Array(s1.length);     
s3[0] = new Array(s1.length);
s3[1] = new Array(s1.length);
s3[2] = new Array(s1.length);    

for(var otro = 0 ; otro < s1.length; otro++){
    //s3[otro] = new Array(s1.length);
    for(var cont = 0 ; cont < s2[otro].length; cont++){


        for(var otro2 = cont ; otro2 < cont+1; otro2++){
            //console.log(`columna de s1 ${s1[otro].length}`);
            //s3[otro] = new Array(s2[otro2].length);
            for(var cont2 = 0 ; cont2 < otro+1; cont2++){

                s3[otro][cont2] = s3[otro][cont2] + (s1[otro][cont] * s2[otro2][cont2]);
                console.log(`poner en ${otro} , ${cont2}`);
                
                console.log(`(${otro},${cont}) --> ${s1[otro][cont]} x (${otro2},${cont2}) --> ${s2[otro2][cont2]}`);
              
            }
        }

        //s3[otro][cont] = s1[otro][cont] * s2[otro][cont];

    }
}
console.log(s3);