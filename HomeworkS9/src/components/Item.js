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
            image: this.props.movie.poster_path
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
                <View style={styles.preview}>
                    <Text style={styles.txtName}
                        numberOfLines={2}>{this.props.movie.original_title}</Text>
                    <Text style={styles.txtDate}>{this.props.movie.release_date}</Text>
                </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: 270,
        width: Dimensions.get('window').width/2,
        padding: 10
    },
    image: {
        height: 200
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