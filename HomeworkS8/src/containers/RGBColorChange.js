import React, { Component } from 'react';
import {
    View,
    FlatList,
} from 'react-native';

import { connect } from 'react-redux'

import ColorControl from '../components/ColorControl';
import ColorItem from '../components/ColorToChange';

class ListScreen extends Component {

    renderItem = ({ item }) => (
        <ColorControl item={item} />
    )
    render() {
        return (
            <View>
                <ColorItem />
                <FlatList
                    data={this.props.colorColtroller}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.name}
                    showsHorizontalScrollIndicator={false} />
            </View>
        );
    }
}

const mapStateToProps = (store) => ({ colorColtroller: store.colorColtroller })
export default connect(mapStateToProps)(ListScreen);