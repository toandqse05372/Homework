import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'
var screen = Dimensions.get('window')
export default class MatchItems extends Component {
    render() {
        return (
            <View style={styles.containerMatch}>
                <Text style={styles.txtTime}>{this.props.match.time}</Text>
                <View style={styles.container2Team}>
                    <View style={styles.container1Team} direction='row'>
                        <Text style={styles.txtName}>{this.props.match.name1}</Text>
                        <Image style={{ width: 35, height: 25 }}
                            source={{ uri: this.props.match.imageUrl1 }}></Image>
                    </View>
                    <View style={styles.container1Team} direction='row-reverse'>
                        <Image style={{ width: 35, height: 25 }}
                            source={{ uri: this.props.match.imageUrl2 }}></Image>
                        <Text style={styles.txtName}>{this.props.match.name2}</Text>

                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerMatch: {
        backgroundColor: '#f0f8ff',
        width: screen.width - 80,
        height: 85,
        marginTop: 15,
        borderRadius: 10,
        flexDirection: 'column'
    },
    container2Team: {
        flexDirection: 'row',
        marginTop: 10,
        flex: 1
    },
    container1Team: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    img: {
        width: 35,
        height: 25
    },
    txtName: {
        fontWeight: 'bold',
        fontSize: 17
    },
    txtTime: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 5
    }
})