import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {novoChurras, listaChurras} from '../assets/image';

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'Que tal um Churras?',
  };

  goToListChurras = () => {
    this.props.navigation.navigate('ListaChurras');
  };

  goToNovoChurras = () => {
    this.props.navigation.navigate('NovoChurras');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.op, styles.colorOp1]}
          onPress={() => this.goToNovoChurras()}>
          <ImageBackground source={novoChurras} style={styles.imageBack}>
            <Text style={styles.textOp}> Novo Churras? </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.op, styles.colorOp2]}
          onPress={() => this.goToListChurras()}>
          <ImageBackground source={listaChurras} style={styles.imageBack}>
            <Text style={styles.textOp}> Lista de Churras </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  op: {
    flex: 1,
    height: '50%',
    borderWidth: 3,
  },

  colorOp1: {
    backgroundColor: '#333333',
  },

  colorOp2: {
    backgroundColor: '#c3c3c3',
  },

  imageBack: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textOp: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
