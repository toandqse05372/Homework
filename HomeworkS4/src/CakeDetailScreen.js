import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet, Image
} from 'react-native';

class CakeDetailScreen extends Component {
    state = {}
    render() {
        return (
            <View style={styles.main}>
                <View style={{ padding: 15 }}>
                    <View style={[styles.element, { backgroundColor: this.props.navigation.getParam('cake').backgroundColor }]}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={{ uri: this.props.navigation.getParam('cake').photos }} />
                        <Text style={styles.text1}> {this.props.navigation.getParam('cake').title}</Text>
                    </View>
                    <View style={[styles.container,{height:this.props.navigation.getParam('cake').line*52}]}>
                        <FlatList
                            data={this.props.navigation.getParam('cake').cakes}
                            renderItem={({ item }) => <Text
                                style={styles.text2}>{item}</Text>}
                            keyExtractor={(item) => item} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'pink'
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 15
    },
    element: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 150,
    },
    text1: {
        fontSize: 25,
        color: 'white',

    },
    text2: {
        fontSize: 20,
        color: 'red',
        marginLeft: 20,
        marginTop: 20,
    }
})
export default CakeDetailScreen;