import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    FlatList
} from 'react-native';
import data from '../../../feed.json';

var color = '';

export default class Post extends Component {
  constructor(){
    super();
    this.state = {
        data: data.orders
    }
  }

  static navigationOptions = {
      tabBarLabel: 'Todos (' + data.stats.all + ')'
  }

  checkPayment(payment){
      if(payment == 'paid'){
          return 'processado';
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

  setColorPayment(payment){
    if(payment == 'paid'){
        this.color = '#93BD65';
    } else if (payment == 'waiting'){
        this.color = '#F5A623';
    } else {
        this.color = '#D0021B';
    }
  }
  
  render() {
    return (

    <ScrollView>
        <FlatList
            data = {this.state.data}
            renderItem = {({item: days}) =>
            <View>
                { Object.values(days)[0].map((item)=>(
                    <View key={item.id} style={styles.card}>
                    <Text style={styles.postTitle}> Pedido #{item.id}</Text>
                    <View style={styles.row}>
                        <View style={styles.item}>
                            <Text style={styles.postContent}> de {item.name} </Text>
                            <Text style={styles.postContent}> Itens ({item.items}) </Text>
                            <Text style={styles.postContent}> Tipo de entrega </Text>
                            <Text style={styles.postContent && styles.bold}> {this.checkShipping(item.shipping)} </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.postContent}> total </Text>
                            <Text style={styles.postContent && styles.preço}> R$ {((item.price)/100).toFixed(2)} </Text>
                            <Text style={styles.postContent && styles.bold}> pagamento {this.setColorPayment(item.payment)} </Text>
                            <Text style={styles.postContent && {color: this.color, borderColor: this.color,
                            borderWidth: 1, borderRadius: 3, width: 100, textAlign: 'center'}}> {this.checkPayment(item.payment)} </Text>
                        </View>
                    </View>
                  </View>
                )
                )}
            </View>
        }
        keyExtractor={(days, index) => index.toString()}
        />
      
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
});