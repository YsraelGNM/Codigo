import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import BackgroundImage from '../components/BackgroundImage';

import t from 'tcomb-form-native';
import { Card } from 'react-native-elements';
import AppButton from '../components/AppButton';

import * as firebase from 'firebase';


var Form = t.form.Form

export default class Register extends Component {
    validador;
    mpass;

    // static navigationOptions = {
    //     title: 'Registro'
    // }

    Registro = () => {
        var value = this.refs.form.getValue();
        if (value) {
            console.log(value);
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
                .then((response) => {
                    console.log('Se creo con exito');
                    firebase.database().ref().child('usuarios').child(response.user.uid).set({
                        nombre: 'pepito',
                        apellido: 'pepon'
                    }).then(() => {
                        console.log('usuario creado en la bse de datos realtime.');

                    }).catch((error) => {
                        console.log(error);
                        console.log('Error al crear el usuario en la base de datos.');

                    })

                }).catch((error) => {
                    console.log('Ocurrió un error al crear el usuario');
                    console.log(error);
                })
        } else {
            console.log(value);
        }
    }

    render() {

        this.validador = {
            validEmail: t.refinement(t.String, (valor) => {
                if (/@/.test(valor)) {
                    return true;
                } else {
                    return false
                }
            }),
            validPass: t.refinement(t.String, (valor) => {
                if (valor.length >= 6) {
                    this.mpass = valor;
                    return true;
                } else {
                    return false;
                }
            }),
            validPass2: t.refinement(t.String, (valor) => {
                if (valor === this.mpass) {
                    return true;
                } else {
                    return false;
                }
            })
        }

        var Person = t.struct({
            email: this.validador.validEmail,
            password: this.validador.validPass,
            password2: this.validador.validPass2
        });

        var options = {
            fields: {
                email: {
                    help: 'Introduce tu email.',
                    error: 'Email Incorrecto',
                    autoCapitalize: 'none',
                    label: 'Correo Electronico',
                    placeholder: 'Ejem.: javier@gmail.com'
                },
                password: {
                    help: 'Introduce tu password.',
                    error: 'Password Incorrecto',
                    password: true,
                    secureTextEntry: true,
                    label: 'Contraseña'

                },
                password2: {
                    help: 'Confirma tu password.',
                    error: 'La contraseña no coincide vuelva a escribirla.',
                    password: true,
                    secureTextEntry: true,
                    label: 'Vuelve a escribir tu Contraseña'

                }
            }
        };

        return (
            <BackgroundImage source={require('../../assets/bg.jpg')} style={{ flex: 1 }}>
                <ScrollView style={estilos.scroll}>
                    <View style={estilos.container}>
                        <Card containerStyle={estilos.card} title="Registro de Usuario" wrapperStyle={{ paddingLeft: 10 }}>
                            <Form
                                ref="form"
                                type={Person}
                                options={options}
                            />
                            <AppButton bgColor={'lightgreen'}
                                title={'Aceptar    '}
                                action={this.Registro}
                                iconName={'pencil'}
                                iconColor={'white'}
                                setWith={false}
                                iconSize={31} />
                        </Card>
                    </View>
                </ScrollView>
            </BackgroundImage>
        )
    }
}

var estilos = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%'
    },
    card: {
        width: '90%',
        borderRadius: 10,
        marginBottom: 20
    },
    scroll: {
        paddingVertical: 20,
        marginBottom: 20
    }
})