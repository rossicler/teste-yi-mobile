import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

export default class Message extends Component {
  static navigationOptions = {
    title: 'Menssagens',
    tabBarLabel: 'Menssagens',
    tabBarIcon: ({tintColor}) => (
      <Image
      source={require('../../images/tabbar/chat.png')}>
      </Image>
  )
  };

  render() {
    return (
      <View>
        <Text> Messages here </Text>
      </View>
    );
  }
}