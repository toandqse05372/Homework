import React, { Component } from 'react';
import {
    Text, StyleSheet, Dimensions,
    View, Image, TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { listMovie } from '../actions'

class Item extends Component {
    state = {}
    listmovie = () => {
        this.props.listmovie({
            seen: this.props.movie.title,
            image: this.props.movie.poster_path,
        })
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.navigation.navigate('Detail', {
                    movie: this.props.movie
                })}
                onLongPress={() => this.props.navigation.navigate('Listmovie')
                }
            >
                <Image
                    style={styles.image}
                    source={{ uri: `https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}` }}
                    resizeMode={'stretch'}
                />

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: 270,
        width: Dimensions.get('window').width * 0.33,
        height: Dimensions.get('window').width * 0.48,
        padding: 6
    },
    image: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.45,
    },
    preview: {
        marginLeft: 15
    },
    txtName: {
        fontSize: 15,
        fontWeight: 'bold', 
    },
    txtDate: {
        fontSize: 10,
    }
})

//export default Item;
export default connect(null, { listMovie })(Item);