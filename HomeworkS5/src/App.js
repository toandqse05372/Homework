import React, { Component } from 'react';
import {
  Text,View,Image
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ResultScreen from './ResultScreen';
import SearchScreen from './SearchScreen';

const Navigation = createStackNavigator({
  Search: {
    screen: SearchScreen,
  },
  
  Result: {
    screen: ResultScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Player Detail",
      }
    }
  },
})

class App extends Component {
  state = {}


  render() {
    return (

      <Navigation />

    )
  }
}

export default App;