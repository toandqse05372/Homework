import React, { Component } from 'react';
import {
    Text, Dimensions,
    View, StyleSheet
} from 'react-native';

import { connect } from 'react-redux'

class ColorItem extends Component {
    state = {}
    render() {
        return (
            <View>
                <View style={[styles.colorZone,
                {
                    backgroundColor: `rgb(${this.props.colorColtroller[0].value},
                                        ${this.props.colorColtroller[1].value},
                                        ${this.props.colorColtroller[2].value})`
                }]}>
                </View>
                <Text style={styles.txt}>
                    {`rgb ( ${this.props.colorColtroller[0].value},${this.props.colorColtroller[1].value},${this.props.colorColtroller[2].value})`
                    }
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    colorZone: {
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width
    },
    txt: {
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 20,
    }
});

const mapStateToProps = ({ colorColtroller }) => ({ colorColtroller })
export default connect(mapStateToProps)(ColorItem);