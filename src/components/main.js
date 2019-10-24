import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import api from '../services/api';

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'Que tal um Churras?',
  };

  goToListChurras = () => {
    this.props.navigation.navigate('ListaChurras');
  };

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={[styles.op, styles.colorOp1]} onPress={()=>this.goToListChurras()}>
            <Text style={styles.textOp}> Novo Churras? </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.op, styles.colorOp2]} onPress={()=>this.goToListChurras()}>
            <Text style={styles.textOp}> Lista de Churras </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems:"center"
  },

  op: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },

  colorOp1: {
    backgroundColor: '#333333',
  },

  colorOp2: {
    backgroundColor: '#c3c3c3',
  },

  textOp: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
//<Text>Que Tal Um Churras?</Text>
//<Button title="Lista de Churras" onPress={()=>this.goToListChurras()}></Button>
