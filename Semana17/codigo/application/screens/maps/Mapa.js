import React, { Component } from 'react';
import { MapView } from 'expo';
import { Text, View } from 'react-native';
import * as firebase from 'firebase'
import {NavigationActions} from 'react-navigation'

export default class Mapa extends Component {
    refPlayas;
   
    constructor(props){
        super(props)
        this.state = {
            markers: [],
            puntoInicial:{
                            lat: -16,
                            lng: -70
                        }

        }
        this.handlePress = this.handlePress.bind(this)
        this.refPlayas = firebase.database().ref().child('playas');
    }

    // componentDidMount() {
    //     this.refPlayas.on('value', (data) => {
    //         let playasList = [];
    //         data.forEach(playa => {
    //             let objPlaya = {
    //                 id: playa.key,
    //                 nombre: playa.val().nombre,
    //                 capacidad: playa.val().capacidad,
    //                 direccion: playa.val().direccion,
    //                 lat: playa.val().lat,
    //                 lng: playa.val().lng
    //             }
    //             playasList.push(objPlaya);

    //             // this.puntoInicial.lat = objPlaya.lat
    //             // this.puntoInicial.lng = objPlaya.lng
    //             let {markers} = this.state;
    //             markers.push({
    //                 coordinate: {
    //                     latitude: +objPlaya.lat,
    //                     longitude: +objPlaya.lng
    //                 },
    //                 cost: objPlaya
    //             })

    //             this.setState({
    //                 markers: markers
    //             })
    //         });
    //     })
    // }

    envieCoord = ()=>{
        if(this.props.enviarCoord){
            this.props.enviarCoord(this.state.puntoInicial)
        }
        
    }


    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
           (position) => {
            //  console.log("wokeeey");
            console.log(position);
             this.setState({
               //this.puntoInicial.lat = position.coords.latitude;
               //this.puntoInicial.lng = position.coords.longitude;
               //    error: null,
                            puntoInicial: {
                                    lat: position.coords.latitude,
                                    lng: position.coords.longitude
                                }
                            });
             console.log(this.state.puntoInicial);
           },
           (error) => {},
           { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
         );
           console.log(this.state.puntoInicial);
           
    }


    handlePress(e){
        this.setState({
            markers: [
                ... this.state.markers,
                {
                    coordinate: e.nativeEvent.coordinate,
                    cost: '250'
                }
            ],
            puntoInicial: {
                lat: e.nativeEvent.coordinate.latitude,
                lng: e.nativeEvent.coordinate.longitude
            }
        })
        this.envieCoord();
    }

    ir(playa){
        const navegador = NavigationActions.navigate({
            routeName: 'miDetallePlayaScreen',
            params: {
                playa: playa
            }
        })
        this.props.navigation.dispatch(navegador)
        
    }


    render() {
        return (<MapView
                    style={{ flex: 1 }}
                    followsUserLocation
                    showsUserLocation
                    initialRegion={{
                        latitude: this.state.puntoInicial.lat,
                        longitude: this.state.puntoInicial.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    onPress = {this.handlePress}
                    >
                    {
                        this.state.markers.map((marker,i)=>{
                                                    return(<MapView.Marker coordinate={{
                                                                                        latitude: marker.coordinate.latitude,
                                                                                        longitude: marker.coordinate.longitude
                                                                                        }} 
                                                                            key={i}
                                                                            onPress={()=>{
                                                                                console.log(marker.cost);
                                                                                this.ir(marker.cost)
                                                                            }}
                                                        >
                                                                {/* <View>
                                                                    <Text>{marker.cost}</Text>
                                                                </View> */}
                                                            </MapView.Marker>)
                                                })
                    }

                    {/* <MapView.Marker
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324
                        }}
                        title={"title"}
                        description={"description"}
                    /> */}
                </MapView>
        );
    }
}
