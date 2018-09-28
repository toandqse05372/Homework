import React, { Component } from 'react';
import {
    Text,Slider,
    View,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'

import { changeValue } from '../actions'

class ColorControl extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    onValueChange = (value) => {
        this.props.changeValue({
            name: this.props.item.name,
            value: value
        })
    }

    colorSlide = () => {
        switch (this.props.item.name) {
            case 'red': return 'red'
            case 'green': return 'green'
            case 'blue': return 'blue'
        }
    }


    render() {
        return (
            <View style={{ marginTop: 18, marginHorizontal: 25 }}>
                <Text style={{ left: this.state.positionText }}>{this.props.item.value}</Text>
                <Slider
                    style={{ width: 300 }}
                    thumbStyle={{ borderColor: this.colorSlide()}}
                    minimumTrackTintColor={this.colorSlide()}
                    thumbTintColor={this.colorSlide()}
                    minimumValue={0}
                    maximumValue={255}
                    step={1}
                    onValueChange={this.onValueChange}
                />
            </View>
        );
    }
}

export default connect(null, { changeValue })(ColorControl);