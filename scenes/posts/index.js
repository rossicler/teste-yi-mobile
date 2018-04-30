import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import Todos from './components/todos';
import Pendentes from './components/pendentes';
import Finalizados from './components/finalizados';

var PostsScreenNavigator = TabNavigator({
    Todos: {screen: Todos},
    Pendentes: {screen: Pendentes},
    Finalizados: {screen: Finalizados}
}, {
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: '#FF1654',
        inactiveTintColor: '#FF1654',
        style: {
            backgroundColor: '#FFF',
            height: 40,
        },
        indicatorStyle: {
            backgroundColor: '#FF1654'
        },
        labelStyle: {
            fontSize: 10,
            fontWeight: 'bold'
        }
    },
    
    borderWidth: 1,
    borderColor: '#F8F8F8'
}
);

class Posts extends Component {
  static navigationOptions = {
    title: 'Pedidos',
    tabBarLabel: 'Pedidos',
    tabBarIcon: ({tintColor}) => (
        <Image
        source={require('../../images/tabbar/cart.png')}>
        </Image>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <PostsScreenNavigator />
      </View>
    );
  }
}

export default Posts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    }
});