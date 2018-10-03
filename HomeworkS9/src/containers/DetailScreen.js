import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux'

class DetailScreen extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.movieDetail}>
                    <Image
                        style={styles.image}
                        source={{ uri: `https://image.tmdb.org/t/p/w500/${this.props.navigation.getParam('movie').poster_path}` }} />
                    <View style={styles.container}>
                        <Text style={styles.text}>Release date: {this.props.navigation.getParam('movie').release_date}</Text>
                        <Text style={styles.text}>Vote average: {this.props.navigation.getParam('movie').vote_average}</Text>
                        <Text style={styles.text}>Vote count: {this.props.navigation.getParam('movie').vote_count}</Text>
                        <Text style={styles.text}>Popularity: {this.props.navigation.getParam('movie').popularity}</Text>
                    </View>
                </View>
                <View style={marginTop = 50}>
                    <Text style={styles.text}>Overview: {this.props.navigation.getParam('movie').overview}</Text>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    movieDetail: {
        flexDirection: 'row',
        height: 200,
        width: Dimensions.get('window').width,
        padding: 10
    },
    image: {
        width: Dimensions.get('window').width*0.33,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10,
        marginLeft: 10
    }
})
export default DetailScreen;