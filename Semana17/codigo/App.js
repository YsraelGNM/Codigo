import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PreLoader from './application/components/PreLoader';
import BackgroundImage from './application/components/BackgroundImage';
import Start from './application/screens/Start';
import Login from './application/screens/Login';
import Logged from './application/navigations/logged'
import Register from './application/screens/Register';
import Invitado from './application/navigations/Invitado';
// import AppButton from './application/components/AppButton';
import firebaseConfig from './application/utils/firebase';
//Importar todas las funciones de firebase
import * as firebase from 'firebase';
import Playas from './application/screens/playa/Playas';
//Inicializar la conexion a nuestra base de datos
firebase.initializeApp(firebaseConfig);



export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLogged: false,
      cargado: false
    }
  }

  async componentDidMount(){
    await firebase.auth().onAuthStateChanged(usuario=>{
      
      if(!usuario){
        //el usuario no tenia la sesion iniciada.
        this.setState({
          isLogged: false,
          cargado: true
        })
      } else {
        //el usuario tenia la sesion iniciada
        this.setState({
          isLogged: true,
          cargado: true
        })
      }
    })
  }

  render(){

    const {isLogged, cargado} = this.state;

    if(!cargado){
      return(<PreLoader/>)
    }

    if(isLogged){
      return(<Logged/>)
    } else {
      return(<Invitado/>)
    }





    // return (
    //   // <View style={styles.container}>
    //   //   {/* <AppButton bgColor={'pink'}
    //   //               title={'Prueba'}
    //   //               action={
    //   //                 ()=>{
    //   //                   console.log("Uy! me presionaron!!!!");
                        
    //   //                 }
    //   //               }
    //   //               iconName={'pencil'}
    //   //               iconColor={'white'}
    //   //               setWith={true}
    //   //               iconSize={22}/> */}
       

    //   // </View>
    //   //  <PreLoader/>
    //   // <BackgroundImage/>
    //   // <Start/>
    //   // <Login/>
    //   // <Register/>
    //   <Invitado/>
    // );
  }
}
