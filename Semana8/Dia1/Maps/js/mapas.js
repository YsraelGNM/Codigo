window.onload = ()=>{
    var map, miPosicion;
    var btnMiPosicion = document.getElementById("btnMiPosicion");
    var btnBorrarMiPosicion = document.getElementById("btnBorrarMiPosicion");
    var markers = [];
    var lineas = [];
    var serpentina = [];
    var point;

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
    };
    
    let configurarListeners = ()=>{
        map.addListener('click',(coords)=>{
            //debugger;
            point = new google.maps.LatLng(coords.latLng.lat(),coords.latLng.lng());
            colocarMarcador(point);
        })
    };

    let miPos = ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                point = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                colocarMarcador(point);
            },(error)=>{
                console.log(error);
            });
        }
    };

    let colocarMarcador = (point)=>{
        miPosicion = new google.maps.Marker({position:point,map:map,draggable:true});
        map.setCenter(point);
        //debugger;
        if (markers.length > 0){
            var nuevo = new google.maps.LatLng(point.lat(),point.lng());
            var anterior = new google.maps.LatLng(markers[markers.length-1].position.lat(), markers[markers.length-1].position.lng());
            var polyline = new google.maps.Polyline({path:[nuevo, anterior],map:map,strokeColor: "#000ddd", strokeWeight:2});
            lineas.push(polyline);
        };
        markers.push(miPosicion);
        //map.addOverlay(polyline)
        
        // Añadiendo el evento drag al marcador creado
        miPosicion.addListener('drag',(coords)=>{
            if (serpentina.length > 0){
                var ptoNew = new google.maps.LatLng(coords.latLng.lat(),coords.latLng.lng());
                var ptoLast = new google.maps.LatLng(serpentina[serpentina.length-1].latLng.lat(), serpentina[serpentina.length-1].latLng.lng());
                var polyline = new google.maps.Polyline({path:[ptoNew, ptoLast],map:map,strokeColor: "#0DFCF1", strokeWeight:2});
                lineas.push(polyline);
            };
            serpentina.push(coords);
        });
    };

    btnMiPosicion.onclick = miPos;

    btnBorrarMiPosicion.onclick = ()=>{
       markers.forEach((elemento)=>{
        elemento.setMap(null);
       })
       markers = [];
       lineas.forEach((elemento)=>{
        elemento.setMap(null);
       })
       lineas = [];
       serpentina.forEach((elemento)=>{
           elemento.setMap(null);
       })
       serpentina = [];
    }

    configurarMapa();

    
};