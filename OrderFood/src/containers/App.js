/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'react-native-firebase'

import LoginScreen from './Loginscreen';
import SplashScreen from './SplashScreen'
import TabMenu from './TabMenu';
import TabOrder from './TabOrder';
import TabInfo from './TabInfo';
import TabHistory from './TabHistory';
import { primaryColorGreen, primaryColorRed } from '../styles'
import { createStore } from 'redux';
import Notification from '../components/Notification'

const store = createStore(rootReducer)

const BottomTabNavigator = createBottomTabNavigator({
  Menu: TabMenu,
  Order: TabOrder,
  Info: TabInfo,
  History: TabHistory
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Menu') {
          iconName = `cutlery`;
        } else if (routeName === 'Order') {
          iconName = `shopping-cart`;
        } else if (routeName === 'History') {
          iconName = `history`;
        } else if (routeName === 'Info') {
          iconName = `info-circle`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Notification iconName={iconName} routeName={routeName} tintColor={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: primaryColorGreen,
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white'
      }
    },
  }

)

const SwitchNavigation = createSwitchNavigator({
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
  HomeScreen: BottomTabNavigator
})


export default class App extends Component {
  // componentDidMount() {
  //   console.log(firebase)
  // }

  render() {
    return (
      <Provider store={store}>
        <SwitchNavigation />
      </Provider>

      //<LoginScreen />
    );
  }
}
