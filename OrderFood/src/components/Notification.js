import React, { Component } from 'react';
import {
    Text, StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/FontAwesome';

class Notification extends Component {
    state = {}
    getProduct() { //get number of products when user add them to cart
        let total = 0
        this.props.orders.forEach(item => {
            total = total + item.amount
        });
        return total
    }

    render() {
        return (
            <View>
                <Ionicons name={this.props.iconName} size={25} color={this.props.tintColor} />
                {this.props.routeName === 'Order' && this.props.orders.length !== 0
                    ? <View style={styles.notify}>
                        <Text style={styles.num}>{this.getProduct()}</Text>
                    </View>
                    : null
                }
            </View>
        );
    }
}

const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps)(Notification);
const styles = StyleSheet.create({
    notify: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
        position: 'absolute',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        left: 15,
    },
    num: {
        color: 'white',
        fontSize: 12
    }

});