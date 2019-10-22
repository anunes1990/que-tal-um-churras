import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import api from '../services/api';

export default class MainScreen extends Component {
  
  goToListChurras = () =>{
    this.props.navigation.navigate('ListaChurras');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Que Tal Um Churras?</Text>
        <Button title="Lista de Churras" onPress={()=>this.goToListChurras()}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"   
    }
});
