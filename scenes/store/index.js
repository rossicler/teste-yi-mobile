import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

export default class Store extends Component {
  static navigationOptions = {
    title: 'Minha loja',
    tabBarLabel: 'Minha loja',
    tabBarIcon: ({tintColor}) => (
      <Image
      source={require('../../images/tabbar/shop.png')}>
      </Image>
  )
  };

  render() {
    return (
      <View>
        <Text> Store here </Text>
      </View>
    );
  }
}
