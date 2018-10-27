import React, { Component } from 'react';
import {
    Text, StyleSheet,
    View, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { primaryColorGreen, primaryColorBrown } from '../styles'
import { deleteOrder } from '../actions'
import { connect } from 'react-redux'
class OrderItem extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={()=> this.props.deleteOrder(this.props.item)}>
                    <Icon name="trash" size={25} color={primaryColorGreen} />
                </TouchableOpacity>
                <Text style={styles.amount}>{this.props.item.amount}</Text>
                <Text style={styles.name}>{this.props.item.name}</Text>
                <Text style={styles.price}>{this.props.item.price}</Text>
                <Text style={styles.price}>{`${this.props.item.unitPrice * this.props.item.amount}$`}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4
    },
    amount: {
        fontWeight: 'bold',
        color: primaryColorBrown,
        marginHorizontal: 16,
    },
    name: {
        flex: 1,
        fontWeight: 'bold',
        color: primaryColorBrown,
        marginHorizontal: 16,
    },
    price: {
        fontWeight: 'bold',
        color: primaryColorBrown,
        marginHorizontal: 16,
    }

})
export default connect(null, { deleteOrder })(OrderItem)