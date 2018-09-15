import React, { Component } from 'react';
import {
    Text, View,
    StyleSheet,Image,
} from 'react-native';
import axios from 'axios';

class ResultScreen extends Component {
    state = {
        data: [],
        dataImage: [],
        dataes: [],
        loading: true,
        unmouted: false,
    }

    componentDidMount() {
        !this.state.unmouted && axios.get('https://api.opendota.com/api/players/' + this.props.navigation.getParam('text'))
            .then((res) => this.setState({ data: res.data, dataImage: res.data.profile, dataes: res.data.mmr_estimate, }))
            .catch(err => console.log(err))
    }

    componentWillUnmount() {
        this.setState({ unmouted: true })
    }
    render() {
        return (
            <View style={{
                flex: 1, backgroundColor: 'black', alignItems: "center",
                justifyContent: "center",
            }}>
                <View style={styles.viewImage}>
                    <Image
                        style={styles.image}
                        source={{ uri: this.state.dataImage.avatarfull }} />
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.text}>Player Name: {this.state.dataImage.personaname}</Text>
                    <Text style={styles.text}> Estimate:{this.state.dataes.estimate}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    viewImage: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    viewText: {
        width: 300,
        backgroundColor: 'white',
        flex: 1,
    },
    text: {
        color: "black",
        marginTop: 30,
        fontSize: 20,
    },
})

export default ResultScreen;