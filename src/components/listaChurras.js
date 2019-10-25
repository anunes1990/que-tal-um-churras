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

const Item = ({title, selecionado, onPress, onLongPress}) => {
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

  mostrarChurras(id) {
    this.props.navigation.navigate('Churras', {id: id});
  }

  render() {
    return (
      <ImageBackground source={background} style={styles.imageBack}>
        <View style={styles.container}>
          <FlatList
            data={this.state.churras}
            extraData={this.state}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Item
                title={item.evento}
                selecionado={item.selecionado}
                onPress={() => this.mostrarChurras(item.id)}
                onLongPress={() => this.mostrarChurras(item.id)}
              />
            )}
          />
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

  imageBack: {
    width: '100%',
    height: '100%',
  },

  itemContainer: {
    backgroundColor: '#FFFFFF36',
    borderRadius: 10,
    borderColor: '#DDD',
    padding: 20,
    marginBottom: 20,
  },

  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },

  itemTextSelecionado: {
    fontSize: 20,
    textDecorationLine: 'line-through',
    color: '#888',
  },
});
