import React, { Component } from 'react';
import {  Text,  Image, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import rootReducer from '../reducers'
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';

const Navigation = createStackNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'What we have this week',
        headerStyle: {
          backgroundColor: '#262626',
        },
        headerTitleStyle: {
          color:'#f5f5f5',
          alignSelf: 'center'
        },
      }
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam('movie').title,
        headerLeft:
        <TouchableOpacity
          onPress={() => navigation.navigate('List')}>
          <Image
            style={{ width: 30, height: 30, marginEnd: 10 ,marginLeft: 10}}
            source={{ uri: 'https://www.materialui.co/materialIcons/navigation/arrow_back_white_192x192.png' }} />
        </TouchableOpacity>,
        headerStyle: {
          backgroundColor: '#262626',
        },
        headerTitleStyle: {
          color:'#f5f5f5',
          alignSelf: 'center'
        },
      };
    }
  }
})
const store=createStore(rootReducer)
class App extends Component {
  state = {}

  render() {

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;