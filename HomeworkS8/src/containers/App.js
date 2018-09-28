import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Slider,
  FlatList,
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import RGBColorChange from './RGBColorChange';

const store = createStore(rootReducer)
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <RGBColorChange />
      </Provider>
    );
  }
}

export default App;