import React from 'react';
import { 
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import PlayasScreen from './../screens/playa/Playas';
import VideoScreen from './../screens/playa/Video';
import MapaScreen from './../screens/maps/Mapa';
import AddPlaya from './../screens/playa/AddPlaya';
import DetallePlaya from '../screens/playa/DetallePlaya';
import Logout from '../screens/Logout';

const playasStackNavigator = createStackNavigator(
    {
        miPlayasScreen:{
            screen: PlayasScreen
        },
        miAgregarPlayasScreen:{
            screen: AddPlaya
        },
        miDetallePlayaScreen:{
            screen: DetallePlaya
        }
    },
    {
        initialRouteName: 'miPlayasScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'rgba(30,30,30,1)'
            },
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center',
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                flex: 1
            }
        }
    }
);


const videoStackNavigator = createStackNavigator(
    {
        miVideoScreen:{
            screen: VideoScreen
        }
    },
    {
        initialRouteName: 'miVideoScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'rgba(30,30,30,1)'
            },
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center',
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                flex: 1
            }
        }
    }
);

const mapaStackNavigator = createStackNavigator(
    {
        miMapaScreen:{
            screen: MapaScreen
        }
    },
    {
        initialRouteName: 'miMapaScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'rgba(30,30,30,1)'
            },
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center',
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                flex: 1
            }
        }
    }
);

const CerrarSesionStackNavigator = createStackNavigator(
    {
        miCerrarSesionScreen:{
            screen: Logout
        }
    },
    {
        initialRouteName: 'miCerrarSesionScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'rgba(30,30,30,1)'
            },
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center',
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                flex: 1
            }
        }
    }
);

const drawerNavigator = createDrawerNavigator(
    {
        miPlayasStackNavigator : {
            screen: playasStackNavigator,
            navigationOptions: ()=>{
                return({
                    drawerLabel: 'Lista de Playas',
                    drawerIcon: ()=>{
                        return(<Icon name='home' size={24} style={{color:'white'}}/>)
                    }
                })
            }
        },

        miVideoStackNavigator : {
            screen: videoStackNavigator,
            navigationOptions: ()=>{
                return({
                    drawerLabel: 'Lista de Videos',
                    drawerIcon: ()=>{
                        return(<Icon name='google' size={24} style={{color:'black'}}/>)
                    }
                })
            }
        },

        miMapaStackNavigator : {
            screen: mapaStackNavigator,
            navigationOptions: ()=>{
                return({
                    drawerLabel: 'Lista de Mapas',
                    drawerIcon: ()=>{
                        return(<Icon name='google' size={24} style={{color:'black'}}/>)
                    }
                })
            }
        },

        CerrarSesionStackNavigator : {
            screen: CerrarSesionStackNavigator,
            navigationOptions: ()=>{
                return({
                    drawerLabel: 'Cerrar Sesion',
                    drawerIcon: ()=>{
                        return(<Icon name='sign-out' size={24} style={{color:'black'}}/>)
                    }
                })
            }
        }
    },
    {
        initialRouteName:'miPlayasStackNavigator',
        drawerBackgroundColor: 'rgba(128,35,60,0.7)',
        contentOptions:{
            activeTintColor: 'white',
            activeBackgroundColor: 'transparent',
            inactiveTintColor: 'white',
            itemsContainerStyle:{
                marginVertical:0
            }
        }
    }
);

export default createAppContainer(drawerNavigator);

