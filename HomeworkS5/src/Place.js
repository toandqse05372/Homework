import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import axios from 'axios'

class Place extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=hanoi&appid=927d09bc49dbee6aac7f5cb1df707542')
            .then(res =>
                this.setState({
                    data: res.data.list,
                    loading: false
                })
            )
            .catch(err => console.log(err))
    }
    render() {
        return (
            <View>
                <Text></Text>
                <Text></Text>
            </View>
        );
    }
}

export default Place;