import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { TabNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import Posts from './scenes/posts/index';
import Message from './scenes/message/index';
import Numbers from './scenes/numbers/index';
import Stock from './scenes/stock/index';
import Store from './scenes/store/index';

var MainScreenNavigator = TabNavigator({
  Posts: {screen: Posts},
  Store: {screen: Store},
  Stock: {screen: Stock},
  Message: {screen: Message},
  Numbers: {screen: Numbers}
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
      activeTintColor: '#FF1654',
      inactiveTintColor: 'gray',
      style: {
          backgroundColor: '#FFF',
          height: 60
      },
      indicatorStyle: {
          backgroundColor: '#FF1654'
      },
      labelStyle: {
        fontSize: 8,
        margin: 1,
        padding: 0
      },
      showIcon: true
  },
}
);

MainScreenNavigator.navigationOptions = {
  title: 'Tab example'
};

export default MainScreenNavigator;