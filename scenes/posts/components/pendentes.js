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
    tabBarLabel: 'Pendentes (' + data.stats.pending + ')'
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
      <ScrollView style={styles.container}>
        <Text style={styles.postTitle}> Pedido #{data.orders[0]["18/01/2018"][1].id} </Text>
        <View style={styles.row}>
            <View style={styles.item}>
                <Text style={styles.postContent}> de {data.orders[0]["18/01/2018"][1].name} </Text>
                <Text style={styles.postContent}> Itens ({data.orders[0]["18/01/2018"][1].items}) </Text>
                <Text style={styles.postContent}> Tipo de entrega </Text>
                <Text style={styles.postContent && styles.bold}> {this.checkShipping(data.orders[0]["18/01/2018"][1].shipping)} </Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.postContent}> total </Text>
                <Text style={styles.postContent && styles.preço}> R$ {((data.orders[0]["18/01/2018"][1].price)/100).toFixed(2)} </Text>
                <Text style={styles.postContent && styles.bold}> pagamento </Text>
                <Text style={styles.postContent && styles.status}> {this.checkPayment(data.orders[0]["18/01/2018"][1].payment)} </Text>
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
        borderColor: '#F5A623',
        color: '#F5A623',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 1,
        width: 100,
    }
});