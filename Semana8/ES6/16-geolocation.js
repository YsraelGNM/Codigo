window.onload = ()=>{
    let obtenerCoordenadas = ()=>{
        //preguntarle al navegador si dispone del objeto de geolocalizacion
        if(navigator.geolocation){
           //obtener la ubicacion actual
           navigator.geolocation.getCurrentPosition((position)=>{
            document.getElementById("contenedor").innerHTML = position.coords.latitude + " " + position.coords.longitude;
           },(error)=>{
               switch (error.code) {
                   case error.PERMISSION_DENIED:
                        document.getElementById("contenedor").innerHTML = "El usuario denego el permiso";
                       break;
                    case error.POSITION_UNAVAILABLE:
                       document.getElementById("contenedor").innerHTML = "Posicion no disponible";
                      break;
                    case error.TIMEOUT:
                      document.getElementById("contenedor").innerHTML = "Tiempo de espera agotado";
                     break;
                    case error.unknown_error:
                        document.getElementById("contenedor").innerHTML = "Error desconosido.";
                       break;
                   default:
                    document.getElementById("contenedor").innerHTML = "Ni se.";
                       break;
               }
            
           });
        }else{
            document.getElementById("contenedor").innerHTML = "No disponemos de geolocalizacion";
        }
    };
    obtenerCoordenadas();
};
