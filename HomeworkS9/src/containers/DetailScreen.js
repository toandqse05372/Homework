import React, { Component } from 'react';
import {
    Text, ImageBackground,
    View, ScrollView,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';
import Dash from 'react-native-dash';

class DetailScreen extends Component {
    state = {}
    render() {
        return (
            <View>
                <ImageBackground
                    style={styles.img}
                    resizeMode='cover'
                    source={{ uri: `https://image.tmdb.org/t/p/w500/${this.props.navigation.getParam('movie').poster_path}` }}
                    blurRadius={50}
                >
                    <ScrollView>
                        <View style={styles.container}>
                            <Image
                                style={styles.image}
                                source={{ uri: `https://image.tmdb.org/t/p/w500/${this.props.navigation.getParam('movie').poster_path}` }} />
                            <Text style={styles.text3}>Release date: {this.props.navigation.getParam('movie').release_date}</Text>
                        </View>
                        <Dash style={{width: Dimensions.get('window').width , height:2, marginTop: 5}}/>
                        <View style={styles.movieDetail}>
                            <View style={styles.movieScore}>
                                <Text style={styles.text2}>Popularity</Text>
                                <Text style={styles.txtScore}>{this.props.navigation.getParam('movie').popularity}</Text>
                            </View>
                            <View style={styles.movieScore}>
                                <Text style={styles.text2}>Vote average</Text>
                                <Text style={styles.txtScore}>{this.props.navigation.getParam('movie').vote_average}</Text>
                            </View>
                            <View style={styles.movieScore}>
                                <Text style={styles.text2}>Vote count</Text>
                                <Text style={styles.txtScore}>{this.props.navigation.getParam('movie').vote_count}</Text>
                            </View>
                            
                        </View>
                        <Dash style={{width: Dimensions.get('window').width , height:2, marginTop: 5}}/>
                        <View style={styles.overview}>

                            <Text style={styles.txtO}>Overview</Text>
                            <Text style={styles.text}>{this.props.navigation.getParam('movie').overview}</Text>

                        </View>
                    </ScrollView>

                </ImageBackground>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    overview: {
        padding: 5,
        height: Dimensions.get('window').height *0.6,
    },
    movieDetail: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        padding: 5
    },
    movieScore: {
        flexDirection: 'column',
        width: Dimensions.get('window').width * 0.32,
        alignItems: 'center',
    },
    image: {
        marginTop: 5,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.71,
    },
    img: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5,
        color: '#E3F2FD',
        padding: 5
    },
    text2: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5,
        color: '#EF6C00',
        padding: 5
    },
    text3: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5,
        color: '#fdfce4',
        padding: 5
    },
    txtScore: {
        fontWeight: 'bold',
        fontSize: 27,
        color: '#fdfce4',

    },
    txtO: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#EF6C00',
        marginLeft: 10,
        marginRight: 10,
    }
})
export default DetailScreen;