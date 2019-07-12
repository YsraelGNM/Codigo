import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PreLoader from '../PreLoader';
import { Divider, Card, Rating } from 'react-native-elements';
import { FlatList, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

export default class CommentList extends Component {
    constructor(props){
        super(props)
        this.refComentarios = firebase.database()
        .ref()
        .child(`comentarios/${this.props.idPlaya}`)
        this.state = {
            comentarios: [],
            cargado: false
        }

    }

    componentDidMount(){
        var comentariosTMP = [];
        this.refComentarios.on('value',data=>{
            data.forEach(fila=>{
                comentariosTMP.push({
                    id:fila.key,
                    comentario: fila.val().comentario,
                    rating: fila.val().rating
                })
            })
            this.setState({
                cargado: true,
                comentarios: comentariosTMP
            })
        })
    }

    renderComment = (comentario)=>{
        return(
            <Card title = {comentario.comentario}>
                <Rating type="rocket" style={misEstilos.rating}  readonly imageSize={20} startingValue = {comentario.rating}/> 
            </Card>
        )
    }

    render() {
        let {cargado, comentarios} = this.state
        if(!cargado){
            return(<PreLoader/>)
        }
        if(comentarios.length === 0){
            return(<View style={misEstilos.noCommentView}>
                        <Text style={misEstilos.noCommentText}>No hay Comentarios, sé el primero en Comentar</Text>
                    </View> )
        } else {
            return (
                <View style={misEstilos.container}>
                    <Text style={misEstilos.title}> Lista de Comentarios </Text>
                    <Divider />
                    <Card>
                        <FlatList data={comentarios} renderItem={({item})=>{
                            return(this.renderComment(item))
                        }}
                        keyExtractor={(data)=>{
                            return data.id
                        }}>

                        </FlatList>
                    </Card>
                </View>
            )
        }
        
    }
}

const misEstilos = StyleSheet.create({
rating:{alignItems:'center',},
container:{
    justifyContent:'center',
    flex:1,
    marginTop:10,
    marginBottom:10
},
title:{
    fontSize:30,
    color:'white',
    textAlign:'center'
},
noCommentView:{
    justifyContent:'center',
    flex:1,
    marginTop:10,
    marginBottom:10
},
noCommentText:{
   backgroundColor:'salmon',
    color:'white',
}
})