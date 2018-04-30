import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

export default class Stock extends Component {
  static navigationOptions = {
    title: 'Estoque',
    tabBarLabel: 'Estoque',
    tabBarIcon: ({tintColor}) => (
      <Image
      source={require('../../images/tabbar/bag.png')}>
      </Image>
  )
  };

  render() {
    return (
      <View>
        <Text> Stock here </Text>
      </View>
    );
  }
}
