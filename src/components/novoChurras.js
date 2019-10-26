import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  DatePickerIOS,
  Button,
  Alert
} from 'react-native';
import api from '../services/api';
import {background} from '../assets/image';

export default class NovoChurrasScreen extends Component {
  static navigationOptions = {
    title: 'Novo Churras',
  };

  constructor(props) {
    super(props);
    this.state = {
      evento: '',
      local: '',
      dataChurras: new Date(),
      qtdPessoas: '',
      quilosCarne: '0.0 Kg',
      latasCeva: '0 Latões',
    };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({dataChurras: newDate});
  }

  getListaChurras = async () => {
    const response = await api.get('/churras');
    const lista = response.data;
    this.setState({churras: lista});
  };

  calculaCarneCerveja(qtdPessoas) {
    if (qtdPessoas !== '') {
      if(parseInt(qtdPessoas) > 0){
        this.setState({qtdPessoas: qtdPessoas});
        const num = parseInt(qtdPessoas);
        let kg = 0.0;
        for (let i = 0; i < num; i++) {
          kg = kg + 0.75;
        }
        this.setState({quilosCarne: `${kg} Kg`, latasCeva: `${num * 4} Latões`});
      } else {
        this.setState({qtdPessoas: qtdPessoas});
        this.setState({quilosCarne: '0.0 Kg', latasCeva: '0 Latões'});  
      }
    } else {
      this.setState({qtdPessoas: qtdPessoas});
      this.setState({quilosCarne: '0.0 Kg', latasCeva: '0 Latões'});
    }
  }


  async salvaChurras(state) {
    if (state.evento !== '' && state.local !== null && state.qtdPessoas !== '') {
      if (parseInt(state.qtdPessoas) > 0) {
        await api.post('/churras', state);
        this.props.navigation.goBack();
      } else {
        this.alert();
      } 
    } else {
      this.alert();
    }
  }

  alert() {
    Alert.alert(
      'Campos Obrigatórios',
      'O nome do do evento e o local são obrigatórios, assim como o número de pessoas que deve ser maior que 0!',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <ImageBackground source={background} style={styles.imageBack}>
        <View style={styles.container}>
          <DatePickerIOS
            style={styles.datepick}
            date={this.state.dataChurras}
            onDateChange={this.setDate}
            mode={'date'}
            locale={'pt-BR'}
            minimumDate={new Date()}
          />

          <TextInput
            style={styles.txtInput}
            placeholder={'Nome do Evento'}
            value={this.state.evento}
            onChangeText={text => this.setState({evento: text})}></TextInput>

          <TextInput
            style={styles.txtInput}
            placeholder={'Local do Evento'}
            value={this.state.local}
            onChangeText={text => this.setState({local: text})}></TextInput>

          <TextInput
            style={styles.txtInput}
            placeholder={'Quantidade de Pessoas'}
            keyboardType="number-pad"
            value={this.state.qtdPessoas}
            onChangeText={text => this.calculaCarneCerveja(text)}></TextInput>

          <Text style={styles.label}> {this.state.quilosCarne} </Text>
          <Text style={styles.label}> {this.state.latasCeva} </Text>
          <Button
            style={styles.btnSave}
            title={'Salvar Churras'}
            onPress={() => this.salvaChurras(this.state)}></Button>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignContent: 'center',
  },

  imageBack: {
    height: '100%',
    width: '100%',
  },

  datepick: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },

  txtInput: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 18,
  },

  label: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
  },
});
