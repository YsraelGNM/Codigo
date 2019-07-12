window.onload = ()=>{
    var map, miPosicion;
    var btnGetCanchas = document.getElementById("btnGetCanchas");
    var markers = [];
    var point;
    var btnCrearCancha = document.getElementById("btnCrear");
    var txtlatitud = document.getElementById("latitud");
    var txtlongitud = document.getElementById("longitud");
    var txtnombre = document.getElementById("nombre");
    var txtdireccion = document.getElementById("direccion");
    var divTabla = document.getElementById("tabla");

    let configurarMapa = ()=>{
      map = new google.maps.Map(document.getElementById('mapa'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 10,
      styles:[
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#ce09ad"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#8faa74"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e3ab1c"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e00000"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#f7080c"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#31c520"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#0b136a"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ]
      });
      configurarListeners();
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            point = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
            map.setCenter(point);
        },(error)=>{
            console.log(error);
        });
      }
    };

     // Initialize Firebase
     let iniciarFirebase = ()=>{
      var config = {
          apiKey: "AIzaSyCY45iIJdX1s62vmucJstpWwEZzU0tEtLQ",
          authDomain: "pruebafb-36284.firebaseapp.com",
          databaseURL: "https://pruebafb-36284.firebaseio.com",
          projectId: "pruebafb-36284",
          storageBucket: "pruebafb-36284.appspot.com",
          messagingSenderId: "672613429294"
      };
      firebase.initializeApp(config);
  }

    let configurarListeners = ()=>{
        map.addListener('click',(coords)=>{
            //debugger;
            point = new google.maps.LatLng(coords.latLng.lat(),coords.latLng.lng());
            txtlatitud.value = coords.latLng.lat();
            txtlongitud.value = coords.latLng.lng();
            quitarMarcador();
            colocarMarcador(point);
        })
    };

    let quitarMarcador = ()=>{
      markers.forEach((elemento)=>{
       elemento.setMap(null);
      })
      markers = [];
    }

    let colocarMarcador = (point)=>{
        miPosicion = new google.maps.Marker({position:point,map:map,draggable:true});
        map.setCenter(point);
        markers.push(miPosicion);
    };

    let crearCancha = ()=>{
      let nombre = txtnombre.value
      let direccion = txtdireccion.value
      let latitud = txtlatitud.value
      let longitud = txtlongitud.value

      let referencia = firebase.database().ref('canchitas')
      //insertando un registro en la base de datos.
      //1.- Generar un nuevo id de registro
      const nuevoKey = referencia.push().key;
      //la funcion child hace referencia a un hijo de la "referencia"
      //la funcion set() recibe un JSON con la data que se guardará dentro de la referencia.
      referencia.child(nuevoKey).set({
          nombre: nombre,
          direccion: direccion,
          latitud: latitud,
          longitud: longitud
      },(error)=>{
          console.log(error);
      });
    }

    let getCanchitas = ()=>{
      //Conectarse a una base de datos
      //1.- Tener referencia al nodo al que conectaremos
      var referencia = firebase.database().ref('canchitas');
      //2.- traer la data a partir de la referencia
      referencia.on('value',(data)=>{
          imprimirData(data);
      })
    }

    let imprimirData = data => {
      var result = [];
      data.forEach(fila => {
          result.push({id: fila.key,
                      nombre: fila.val().nombre,
                      direccion: fila.val().direccion,
                      latitud: fila.val().latitud,
                      longitud: fila.val().longitud,
                      eliminar: `<button type="button" class="btn btn-danger" id="btnEliminar">Eliminar</button>`
                      });
      });

      // // // //for(var i in data) //´para convertir object json en array
      // // // //result.push([i, data[i]]);
      removeTable("mtd");
      insertarTabla(result,divTabla);
      //debugger;
      var btnEliminar = document.querySelectorAll("#btnEliminar");
      for (let index = 0; index < btnEliminar.length; index++) {
        const element = btnEliminar[index];
        element.addEventListener('click', function(event) {
          // console.log(event);
          // var x = $('#btnEliminar').wrap('<p/>').parent().html();
          // console.log(x);
          // debugger;
          let id = event.target.parentNode.parentNode.cells[0].innerText;
          let referencia = firebase.database().ref(`canchitas/${id}`);
          referencia.remove().then(()=>{
              
          }).catch((error)=>{
              console.log(error);
          });
          
          });
      }
  }



  function insertarTabla(data,mdiv) {
    //debugger;
    //removeTable("mtd");
    let mtabla = document.createElement("table");
    mtabla.setAttribute("class","table table-hover table-dark");
    mtabla.setAttribute("id","mtd");
    let cad = "";
    let flag = false;
    let strName = "";

    for (let index = 0; index < data.length; index++) {
        //debugger;
        let tr = document.createElement("tr");
        for(strName in data[index])
        {
            if(index == 0 && flag == false){
                cad = cad + `<th>${strName}</th>`;
            }else{
                //debugger;
                if (data[index][strName].toString().match(/^.*jpg/)) {
                    cad = cad +  `<td><div class="text-center" id="cargaimg"><div class="spinner-border" role="status"></div></div><img id="imgC" hidden="hidden" src="${data[index][strName]}"/></td>`;
                  }else if(data[index][strName].toString().match(/^.*object/)){
                    let mdiv2 = document.createElement("div");
                    // //debugger;
                    // console.log(data[index][strName]);
                    
                    // insertarTabla(data[index][strName],mdiv2);
                    cad = cad +  `<td>${mdiv2.innerHTML}</td>`;
                    //console.log(mdiv2)
                  }else{
                    cad = cad +  `<td>${data[index][strName]}</td>`;
                  }
            }
        }
        tr.innerHTML = cad;
        mtabla.appendChild(tr);
        if(index == 0 && flag == false){
            index = -1;
            flag = true;
        }
        cad = "";
    }
    mdiv.appendChild(mtabla);
}

function removeTable(id){
    var tbl = document.getElementById(id);
    if(tbl) tbl.parentNode.removeChild(tbl);
}

    btnCrearCancha.onclick = crearCancha;
    btnGetCanchas.onclick = getCanchitas;

    configurarMapa();
    iniciarFirebase();
};