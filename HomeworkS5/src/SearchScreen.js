import React, { Component } from 'react';
import {
  Text, View, StyleSheet, Image, TextInput,
  Keyboard, Dimensions, TouchableOpacity, KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

class DotaListScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: null,
      textHero: null
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (

      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                style={{ width: 180, height: 180, marginTop: 20 }}
                source={{ uri: 'http://icons.iconarchive.com/icons/papirus-team/papirus-places/512/folder-red-steam-icon.png' }} >
              </Image>
              <Text style={styles.textTitle}>Dota Steam ID Search</Text>
            </View>
            <View style={styles.logoContainer}>
              <TextInput style={styles.input}
                placeholderTextColor='white'
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
              />
              <TouchableOpacity style={styles.button}
                onPress={() => this.props.navigation.navigate('Result', {
                    text: this.state.text,})
                }>
                <Text style={styles.TextSearch}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {    backgroundColor: 'white',
    flex: 1,

  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textLogo: {
    fontSize: 100,
    fontWeight: 'bold',
  },
  textTitle: {
    color: 'red',
    fontSize: 20,
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 300,
    padding: 20,
    backgroundColor: 'red'
  },
  viewSearch: {
    height: 50,
    //  backgroundColor: 'rgba(255,255,255,0.2)',
    width: Dimensions.get('window').width - 30,
    marginBottom: 20,
    flexDirection: 'row',
  },
  input: {
    height: 45,
    width: Dimensions.get('window').width*2/3,
    color: 'black',
    paddingHorizontal: 10,
    marginBottom: 20,

  },
  button: {
    width: Dimensions.get('window').width/2,
    backgroundColor: 'purple',
    paddingVertical: 10,
  },
  TextSearch: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  }

})
export default DotaListScreen;