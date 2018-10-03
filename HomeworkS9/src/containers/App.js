import React, { Component } from 'react';
import {  Text,  View,} from 'react-native';
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
        title: '7 days of movie',
      }
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam('movie').title,
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