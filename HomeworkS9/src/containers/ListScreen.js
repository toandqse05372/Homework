import React, { Component } from 'react';
import {
    Text, FlatList, ImageBackground,StyleSheet,
    View, Button, ActivityIndicator,Dimensions
} from 'react-native';
import Item from '../components/Item';

import axios from 'axios'

class ListScreen extends Component {
    state = {
        data: [],
        loading: true
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=a5753dd20d8bf169dbcdff9e7d730148`)
            .then(res =>
                this.setState({
                    data: res.data.results,
                    loading: false
                })
            )
            .catch(err => console.log(err))
    }
    renderItem = ({ item }) => {
        return <Item
            movie={item}
            navigation={this.props.navigation} />
    }

    render() {
        return (
            <View>
                <ImageBackground
                    style={styles.img}
                    resizeMode='cover'
                    source={{ uri: `https://png.pngtree.com/thumb_back/fw800/back_pic/04/31/71/925842b6a8df118.jpg` }}
                    blurRadius={5}
                >
                    {this.state.loading
                        ? <ActivityIndicator></ActivityIndicator>
                        : <FlatList
                            data={this.state.data}
                            renderItem={this.renderItem}
                            numColumns={3}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    }
                </ImageBackground>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    img: {
        width: Dimensions.get('window').width,
    },
})
export default ListScreen;