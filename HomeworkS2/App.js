/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScheduleComponent from './component/Match';
import teamArr from './data/team'

class App extends Component {
  state = {}
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: '#483d8b' }}>
        <Text
          style={{ fontWeight: 'bold', fontSize: 40, color: '#f0f8ff' }}
        >Schedule</Text>
        <Image
          style={{ width: 180, height: 180, marginTop: 20 }}
          source={{ uri: 'https://png.icons8.com/color/260/world-cup-2018.png' }} >
        </Image>
        <Text
          style={{fontSize: 20, color: '#f0f8ff'}}
        >FIFA WORLD CUP 2018</Text>
        <ScheduleComponent object1={teamArr[0]} object2={teamArr[1]} time="Jul 6 2018 - 9:00 PM" />
        <ScheduleComponent object1={teamArr[2]} object2={teamArr[3]} time="Jul 7 2018 - 1:00 AM" />
        <ScheduleComponent object1={teamArr[4]} object2={teamArr[5]} time="Jul 8 2018 - 1:00 AM" />


      </View>



    );
  }
}

export default App;