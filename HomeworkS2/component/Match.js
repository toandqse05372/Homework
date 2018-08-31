import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import NameAndImage from './TeamAndFlag'
var screen = Dimensions.get('window')
export default class Match extends Component {
    render() {
        return (
            <View
                style={{
                    backgroundColor: '#f0f8ff',
                    width: screen.width - 80,
                    height: 85,
                    marginTop: 15,
                    borderRadius: 10,
                    flexDirection: 'column'
                }}
            >
                <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginTop: 5 }}> {this.props.time} </Text>

                <View style={{ flexDirection: 'row', marginTop: 10, flex: 1 }}>
                    <NameAndImage object={this.props.team1} direction='row'></NameAndImage>
                    <NameAndImage object={this.props.team2} direction='row-reverse'></NameAndImage>
                </View>

            </View>
        )
    }
}