import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class TeamAndFlag extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: this.props.direction, justifyContent: 'space-around', }}>
                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{this.props.object.name}</Text>
                <Image style={{ width: 35, height: 25 }}
                    source={{ uri: this.props.object.imageUrl }}></Image>
            </View>
        )
    }
}