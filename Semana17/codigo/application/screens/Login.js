import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import BackgroundImage from '../components/BackgroundImage';

import t from 'tcomb-form-native';
import { Card } from 'react-native-elements';
import AppButton from '../components/AppButton';
import * as firebase from 'firebase';

var Form = t.form.Form

export default class Login extends Component {
    validador;

    static navigationOptions = {
        title: 'Login'
    }

    iniciarSesion = ()=>{
        var value = this.refs.form.getValue();
        if(value){
            console.log(value);
            firebase.auth().signInWithEmailAndPassword(value.email,value.password)
            .then(()=>{
                console.log('Inicio se sesion exitoso.');
                Alert.alert('Exito','Inicio de Sesion Exitoso');
                
            }).catch((error)=>{
                Alert.alert('Fatal','Fue un desastre tu inicio de sesion');
                console.log('Falló el inicio de sesion.');
                console.log(error);
            })
        } else {
            console.log(value);
            
        }
    }

    render() {

        this.validador = {
            validEmail: t.refinement(t.String,(valor)=>{
                if(/@/.test(valor)){
                    return true;
                } else {
                    return false
                }
            }),
            validPass: t.refinement(t.String,(valor)=>{
                if(valor.length >= 6){
                    return true;
                } else {
                    return false;
                }
            })
        }

        var Person = t.struct({
            email: this.validador.validEmail,               // a required number
            password: this.validador.validPass        // a boolean
          });
        
          var options = {
              fields:{
                  email:{
                      help:'Introduce tu email.',
                      error:'Email Incorrecto',
                      autoCapitalize:'none',
                      label:'Correo Electronico',
                      placeholder:'Ejem.: javier@gmail.com'
                  },
                  password:{
                        help:'Introduce tu password.',
                        error:'Password Incorrecto',
                        password: true,
                        secureTextEntry:true,
                        label:'Contraseña'

                  }
              }
          };

        return (
            <BackgroundImage  source={require('../../assets/bg.jpg')} style={{flex:1}}>
                <View>
                    <Card title = "Iniciar Sesion" wrapperStyle = {{paddingLeft: 10}}>
                    <Form
                        ref="form"
                        type={Person}
                        options={options}
                    />
                     <AppButton bgColor={'pink'}
                        title={'Iniciar Sesion    '}
                        action={this.iniciarSesion}
                        iconName={'sign-in'}
                        iconColor={'white'}
                        setWith={false}
                        iconSize={31}/>
                    </Card>
                </View>
            </BackgroundImage>
        )
    }
}
