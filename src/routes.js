import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from './components/main';
import ListaChurrasScreen from './components/listaChurras';
import NovoChurrasScreen from './components/novoChurras';
import ChurrasScreen from './components/churras';

const AppNavigator = createStackNavigator(
  {
    //String de Navegação: Componente da tela
    Main: MainScreen,
    ListaChurras: ListaChurrasScreen,
    NovoChurras: NovoChurrasScreen,
    Churras: ChurrasScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#FFF',
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
