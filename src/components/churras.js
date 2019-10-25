import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground, Text} from 'react-native';
import api from '../services/api';
import {background} from '../assets/image';

export default class ChurrasScreen extends Component {
  static navigationOptions = {
    title: 'Churras',
  };

  constructor(props) {
    super(props);
    this.state = {
      churras: {
        evento: '',
        dataChurras: '',
        qtdPessoas: '0',
        quilosCarne: '0.0 Kg',
        latasCeva: '0 Latões',
        local: '',
      },
    };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({dataChurras: newDate});
  }

  componentWillMount() {
    const id = this.props.navigation.state.params.id;
    this.getChurras(id);
  }

  async getChurras(id) {
    const response = await api.get(`/churras/${id}`);
    const churras = response.data;
    this.setState({churras: churras});
}

  render() {
    return (
      <ImageBackground source={background} style={styles.imageBack}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.titulo}>{this.state.churras.evento}</Text>
            <Text style={styles.info}>Local: {this.state.churras.local}</Text>
            <Text style={styles.info}>Data: {this.state.churras.dataChurras}</Text>
            <Text style={styles.info}>Qtd. de Gente: {this.state.churras.qtdPessoas}</Text>
            <Text style={styles.info}>Carne: {this.state.churras.quilosCarne}</Text>
            <Text style={styles.info}>Trago: {this.state.churras.latasCeva}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  imageBack: {
    height: '100%',
    width: '100%',
  },
  text: {
    color: '#ffffff',
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffff36',
    borderRadius: 15,
    padding: 15,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  info: {
    textAlign: 'left',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    color: '#FFF',
  },
});
