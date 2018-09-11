import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import CakeListScreen from './CakeListScreen';
import CakeDetailScreen from './CakeDetailScreen';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


const Navigation = createStackNavigator({
  CakeList: {
    screen: CakeListScreen,
    navigationOptions: () => {
      return {
        title: 'Cakes',
      }
    }
  },
  CakeDetail: {
    screen: CakeDetailScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam('cake').title,
      }
    }
  }
})

class App extends Component {
  state = {}

  render() {
    return (
      <Navigation/>
      
    )
  }
}

export default App;