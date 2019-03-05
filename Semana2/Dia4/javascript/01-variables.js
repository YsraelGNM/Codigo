// alert("Hola mundo")
// variables
// Se crea con el prefijo "var"
// sus nombres no pueden iniciar con un numero
// en general en javascript, colocar un ";" al 
// finalizar una sentencia.
/////////var x = 5;
//sirve para mostrar datos en el navegador en la 
// zona de la consola.
/////////console.log(x);


//2.1
var b = 11;
var h = 7;
console.log((b*h)/2);

//2.2
var tc = 3.3;
var din = 100;
console.log(din/tc);

//2.3
var anio = 2000;
var fecha = new Date();
var anioActual = fecha.getFullYear();
console.log(anioActual - anio);

//2.4
var hr = 2.3;
var nhr = Math.trunc(hr);
if(nhr < hr) {
    nhr += 1;
}
console.log(nhr);

//2.5
var largo = 57;
var alto = 5;
var pu = 23.3;
console.log((largo*alto)*pu);

//2.6
var lado1 = 10
var lado2 = 15
console.log(Math.sqrt(lado1^2+lado2^2));

//2.7
var km = 520;
var pu = 23.5;
console.log(km*pu);

//2.8
var distancia = 360;
var veloc = 40; ///km/h
console.log(distancia/veloc);

//2.9
var tiempo = 2.58;
var pu = 0.50; ////costo por minuto
var ntiempo = Math.trunc(tiempo);
console.log(ntiempo*pu);

//2.10
var litros = 52;
var pu = 25.3;
console.log((litros/1000)*pu);

//2.11
var kw = 236;
var factor = 15;
var pu = 12.30;
console.log((kw*factor)*pu);

//2.12
var pu = 280;
var pu_con_dscto = pu-(pu*0.2);
var pu_con_imp = pu_con_dscto+(pu_con_dscto*0.15);
console.log(pu_con_dscto);
console.log(pu_con_imp);

//2.13
var sueldo = 3200;
var ahorro = sueldo*0.15;
console.log(ahorro*48);

//2.14
var dias = 15;
var hotel_dia = 150;
var comida_dia = 70;
var gasto_dia = 100;
console.log(hotel_dia*  dias);
console.log(comida_dia*  dias);
console.log(gasto_dia*  dias);


//3.1
console.log("//////////////////////////// 3.1");
var edad = 60;
if (edad <= 65){
    console.log("SI puede votar");
}
else{
    console.log("NO es obligatorio votar");
}

//3.2
console.log("//////////////////////////// 3.2");
var ph = 30;
var ht = 48;
if (ht>40){
    var exce = ht-40;
    var ht = 40;
}
console.log((ht*ph)+(exce*2)*ph);

//3.3
console.log("//////////////////////////// 3.3");
var dispone = 150;
switch(true) {
    case dispone > 250:
      console.log("Tienes para un anillo");
      break;
    case (dispone >= 101 && dispone <= 250):
        console.log("Tienes para flores");
      break;
    case (dispone >= 11 && dispone <= 100):
       console.log("Tienes para chocolates");
    break;
    default:
        console.log("Tienes para tarjeta");
  }

//3.4
console.log("//////////////////////////// 3.4");
var th = 11;
var vt = 0
for (i = 1; i <= th; i++) {
    switch(true) {
        case (i <= 2):
          vt += 5;
          break;
        case (i <= 5):
            vt += 4;
          break;
        case (i <= 10):
            vt += 3;
        break;
        default:
            vt += 2;
    }
}
console.log(vt);

//3.5
debugger;
console.log("//////////////////////////// 3.5");
var matrix = [];
matrix[0] = ["Juan",26];
matrix[1] = ["Roberto",27];
matrix[2] = ["Manuel",24];
var nombre = matrix[0][0];
var edad = matrix[0][1];
for(var i=0; i<=matrix.length-1; i++) {
    if (edad > matrix[i][1]){
        edad = matrix[i][1];
        nombre = matrix[i][0];      
    }
}
console.log(nombre);

//3.6
console.log("//////////////////////////// 3.6");



//3.12
console.log("//////////////////////////// 3.12");
var sa = 1500;
var com = 3600;
var pago = 2100;
var pm = sa * 0.15;
var sin_interes = sa * 0.85;

