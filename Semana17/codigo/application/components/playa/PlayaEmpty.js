import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class PlayaEmpty extends Component {
    render() {
        return (
            <View style={misEstilos.playaView}>
                <Text style={misEstilos.playaText}> No hay playa disponible. </Text>
            </View>
        )
    }
}


const misEstilos = StyleSheet.create({
    playaView:{
        justifyContent:'center',
        flex:1,
        marginTop:10,
        marginBottom:10
    },
    playaText: {
        backgroundColor: 'lightcyan',
        color:'black',
        textAlign:'center',
        padding:20
    }
})