import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  Text,
  View,
} from 'react-native';
import api from '../services/api';

const Item = ({title, selecionado, onPress, onLongPress}) => {
  console.log(selecionado);
  return (
    <TouchableWithoutFeedback onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.itemContainer}>
        <Text
          style={selecionado ? styles.itemTextSelecionado : styles.itemText}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'Lista de Churras',
  };

  state = {
    churras: [],
  };

  componentWillMount() {
    this.getListaChurras();
  }

  getListaChurras = async () => {
    const response = await api.get('/churras');
    const lista = response.data;
    this.setState({churras: lista});
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.churras}
          extraData={this.state}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Item
              title={item.tarefa}
              selecionado={item.selecionado}
              onPress={() => this.selecionar(item.id)}
              onLongPress={() => this.mostrarTarefa(item.id)}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#fff',
    borderBottomColor: '#DDD',
    padding: 20,
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
