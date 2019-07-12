import React, { Component } from 'react'
import * as firebase from 'firebase'
import {Alert} from 'react-native'

export default class Logout extends Component {

    componentDidMount(){
        firebase.auth().signOut().then(()=>{
            Alert.alert('Gracias!','Ha cerrado sesión.')
        })  
    }

    render() {
        return null
    }
}
