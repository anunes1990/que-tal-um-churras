import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from './components/main';
import ListaChurrasScreen from './components/listaChurras';

const AppNavigator = createStackNavigator(
    {
        //String de Navegação: Componente da tela
        Main: MainScreen,
        ListaChurras: ListaChurrasScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#000'
            },
            headerTintColor: '#FFF'
        },
    },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;