import React, { Component } from 'react'
import { View } from 'react-native'
import BackgroundImage from '../components/BackgroundImage';
import AppButton from '../components/AppButton';


export default class Start extends Component {

    static navigationOptions = {
        title: 'Playa App'
    }

    iniciarsesion = ()=>{
        this.props.navigation.navigate('miLogin');
    }

    registrar = ()=>{
        this.props.navigation.navigate('miRegister');
    }

    facebook = ()=>{
        
    }

    render() {
        return (
            <BackgroundImage source={require('../../assets/bg.jpg')} style={{flex:1}}>
                <View style={{justifyContent:'center', flex:1}}>
                    <AppButton bgColor={'pink'}
                        title={'Iniciar Sesion  '}
                        action={this.iniciarsesion}
                        iconName={'sign-in'}
                        iconColor={'white'}
                        setWith={true}
                        iconSize={31}/>
                    
                    <AppButton bgColor={'orange'}
                        title={'Registrarme  '}
                        action={this.registrar}
                        iconName={'pencil'}
                        iconColor={'white'}
                        setWith={true}
                        iconSize={31}/>

                    <AppButton bgColor={'blue'}
                        title={'facebook  '}
                        action={this.facebook}
                        iconName={'facebook'}
                        iconColor={'white'}
                        setWith={true}
                        iconSize={31}/>

                </View>
            </BackgroundImage>
        )
    }
}
