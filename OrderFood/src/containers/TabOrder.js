import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import OrderItem from '../components/OrderItem';
import { commonstyle, primaryColorRed, primaryColorBrown } from '../styles'

class TabOrder extends Component {

    calculator() { //calculate total of order
        let total = 0
        this.props.orders.forEach(item => {
            total = total + item.unitPrice * item.amount
        });
        return total
    }
    renderTitle = () => <Text style={commonstyle.screenTitle}>Order</Text>
    renderOder = () => <FlatList
        style={{ flexGrow: 0, }}
        data={this.props.orders}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={item => item.name} />
    renderTotal = () => <View>
        <View style={{
            marginHorizontal: 7,
            marginVertical: 12,
            borderBottomColor: primaryColorBrown,
            borderTopWidth: 1
        }} />
        <View style={{ flexDirection: 'row' }}>
            <Text style={[commonstyle.screenTitle, { flex: 1 }]}>
                Total
            </Text>
            <Text style={[commonstyle.screenTitle]}>
                {this.calculator()}$
            </Text>
        </View>
    </View>
    renderConfirm = () => <TouchableOpacity
        style={[commonstyle.button, {
            position: 'absolute',
            bottom: 16,
            alignSelf: 'center'
        }]}>
        <Text style={{ color: 'white' }}>Confirm</Text>
    </TouchableOpacity>
    render() {
        return (
            <View style={commonstyle.screenContainer}>
                {this.renderTitle()}
                {this.renderOder()}
                {this.renderTotal()}
                {this.renderConfirm()}
            </View>
        );
    }
}
const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps)(TabOrder);