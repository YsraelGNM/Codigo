import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackgroundImage from '../../components/BackgroundImage';
import PlayaEmpty from '../../components/playa/PlayaEmpty';

export default class Video extends Component {
    render() {
        return (
           <BackgroundImage source={require('../../../assets/bg.jpg')}>
                <Text>Videosssssssssss</Text>
           </BackgroundImage>
        )
    }
}
