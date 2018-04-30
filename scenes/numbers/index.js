import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

export default class Numbers extends Component {
  static navigationOptions = {
    title: 'Numeros',
    tabBarLabel: 'Numeros',
    tabBarIcon: ({tintColor}) => (
      <Image
      source={require('../../images/tabbar/chart.png')}>
      </Image>
  )
  };

  render() {
    return (
      <View>
        <Text> Numbers here </Text>
      </View>
    );
  }
}
