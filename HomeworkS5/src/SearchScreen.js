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
    };
  }

  render() {
    return (

      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
              <TextInput style={styles.input}
                placeholderTextColor='white'
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
              />
              <TouchableOpacity style={styles.button} >
                <Text style={styles.TextSearch}>Search</Text>
              </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    height: 45,
    width: Dimensions.get('window').width * 2 / 3,
    color: 'black',
    paddingHorizontal: 10,
    marginBottom: 20,

  },
  button: {
    width: Dimensions.get('window').width / 2,
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