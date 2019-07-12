import React, { Component } from 'react'
import { Card, Text } from 'react-native-elements';
import AppButton from '../../components/AppButton';
import PlayaRating from './PlayaRating';

export default class Playa extends Component {
    render() {
        const playa = this.props.objPlaya
        return (
            <Card title={playa.nombre} image={require('../../../assets/icon.png')}>
                <PlayaRating idPlaya={playa.id}/>
                <Text style={{marginBottom:10, marginTop:10 }}>{`Capacidad: ${playa.capacidad} vehiculos.`}</Text>
                <AppButton bgColor={'skyblue'}
                        title={'Editar una Playa    '}
                        iconName={'pencil'}
                        iconColor={'white'}
                        action={()=>{}}
                        setWith={false}
                        iconSize={31}/>
                 <AppButton bgColor={'orange'}
                        title={'Regresar    '}
                        iconName={'pencil'}
                        iconColor={'white'}
                        action={()=>{}}
                        setWith={false}
                        iconSize={31}/>
            </Card>
        )
    }
}
