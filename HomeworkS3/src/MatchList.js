import React, { Component } from 'react';
import {
  Text, FlatList,
  View,
} from 'react-native';
import { data } from './team.json'
import MatchItems from './MatchItems';

class MatchList extends Component {
  state = {}

  renderItem = ({item}) => <MatchItems match={item}/>
  
  render() {
    return (
      <View>
        <FlatList
          //1. Data
          data={data}
          //2.item
          renderItem={this.renderItem}
          numColumns={1}
        />
      </View>
    );
  }
}

export default MatchList;