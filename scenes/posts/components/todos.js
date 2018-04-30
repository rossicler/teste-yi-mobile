import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    FlatList
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

const data = require('../../../feed.json');
var i = 0;

export default class Post extends Component {
  static navigationOptions = {
      tabBarLabel: 'Todos (' + data.stats.all + ')'
  }

  checkPayment(payment){
      if(payment == 'paid'){
          return 'processado'
      } else if (payment == 'waiting') {
          return 'em espera';
      } else {
          return 'recusado';
      }
  }

  checkShipping(shipping){
      if(shipping == 'expedited'){
          return 'Frete SEDEX';
      } else if (shipping == 'custom'){
          return 'À combinar';
      } else if (shipping == 'takeout'){
          return 'Retirar na loja';
      } else {
          return 'Normal';
      }
  }

  render() {
    return (

    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.postTitle}> Pedido #{data.orders[0]["18/01/2018"][0].id}</Text>
        <View style={styles.row}>
            <View style={styles.item}>
                <Text style={styles.postContent}> de {data.orders[0]["18/01/2018"][0].name} </Text>
                <Text style={styles.postContent}> Itens ({data.orders[0]["18/01/2018"][0].items}) </Text>
                <Text style={styles.postContent}> Tipo de entrega </Text>
                <Text style={styles.postContent && styles.bold}> {this.checkShipping(data.orders[0]["18/01/2018"][0].shipping)} </Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.postContent}> total </Text>
                <Text style={styles.postContent && styles.preço}> R$ {((data.orders[0]["18/01/2018"][0].price)/100).toFixed(2)} </Text>
                <Text style={styles.postContent && styles.bold}> pagamento </Text>
                <Text style={styles.postContent && styles.status}> {this.checkPayment(data.orders[0]["18/01/2018"][0].payment)} </Text>
            </View>
        </View>
      </View>
    </ScrollView>
    );
  }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {
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