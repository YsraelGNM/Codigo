import React, { Component } from 'react'
import { Text, View } from 'react-native'
import * as firebase from 'firebase'
import {Rating} from 'react-native-elements'

export default class PlayaRating extends Component {
    constructor(props){
        super(props)
        this.refComentarios = firebase.database()
        .ref()
        .child(`comentarios/${this.props.idPlaya}`)
        this.state = {
            promedio: -1
        }

    }

    componentDidMount(){
        var promedio = 0;
        this.refComentarios.on('value',data=>{
            data.forEach(fila=>{
                promedio += fila.val().rating
            });
            promedio = promedio / data.length;
            this.setState({
                promedio: promedio
            })
        })
    }

    render() {
        let {promedio} = this.state;
        if(promedio === -1){
            return (
                <View>
                    <Text> Sin puntuaciones </Text>
                </View>
            )
        } else {
            return (
                <View>
                    <Rating ref={"rating"} imageSize = {20} readonly startingValue={promedio}  />
                </View>
            )
        }
        
    }
}
