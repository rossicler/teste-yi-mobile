import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
} from 'react-native';

const data = require('../../../feed.json');

export default class Post extends Component {
  static navigationOptions = {
    tabBarLabel: 'Finalizados (' + data.stats.ended + ')'
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.postTitle}> Pedido #1401 </Text>
        <View style={styles.row}>
            <View style={styles.item}>
                <Text style={styles.postContent}> de Bárbara Pereira </Text>
                <Text style={styles.postContent}> Itens (1) </Text>
                <Text style={styles.postContent}> Tipo de entrega </Text>
                <Text style={styles.postContent && styles.bold}> Frete SEDEX </Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.postContent}> total </Text>
                <Text style={styles.postContent && styles.preço}> R$ 269,90 </Text>
                <Text style={styles.postContent && styles.bold}> pagamento </Text>
                <Text style={styles.postContent && styles.status}> processado </Text>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#FFF',
    },
    row: {
        flexDirection: 'row',
    },
    item: {
        flexDirection: 'column',
        width: width/2
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    },
    postContent: {
        marginTop: 10,
        color: '#000000'
    },
    bold: {
        fontWeight: 'bold',
    },
    preço: {
        color: '#FF1654',
    },
    status: {
        borderWidth: 1,
        borderColor: '#93BD65',
        color: '#93BD65',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 1,
        width: 100,
    }
});