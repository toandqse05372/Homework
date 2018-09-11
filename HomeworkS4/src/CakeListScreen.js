import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList, StyleSheet
} from 'react-native';
import CakeItem from './CakeItem';
import { data } from './database.json';

class CakeListScreen extends Component {
    state = {}

    renderItem = (data) => {
        return <CakeItem
            cake={data.item}
            navigation={this.props.navigation} />
    }

    render() {
        return (
            <View style={styles.main}>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => {
                        return item.title
                    }} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'pink'
    },
})

export default CakeListScreen;