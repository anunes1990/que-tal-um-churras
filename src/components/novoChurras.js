import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import api from '../services/api';
import {background} from '../assets/image';

export default class NovoChurrasScreen extends Component {
  static navigationOptions = {
    title: 'Novo Churras',
  };

  state = {
    churras: [],
  };

  componentWillMount() {
    //this.getListaChurras();
  }

  getListaChurras = async () => {
    const response = await api.get('/churras');
    const lista = response.data;
    this.setState({churras: lista});
  };

  render() {
    return (
      <ImageBackground source={background} style={styles.imageBack}>
        <View style={styles.container}>
          <Text>Novo Churras</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  imageBack:{
    height:'100%',
    width:'100%'
  },
  itemContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DDD',
    padding: 20,
    marginBottom: 20,
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  itemTextSelecionado: {
    fontSize: 20,
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

//export default ListaChurrasScreen;
