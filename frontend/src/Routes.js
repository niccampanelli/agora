import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import Landing from './pages/Landing';
import Map from './pages/Map';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Receitas from './pages/Receitas';
import DetalheReceitas from './pages/Receitas/DetalheReceitas';
import SettingScreen from './pages/Profile/SettingScreen';
import ConsultasMarcadas from './pages/Consultas/Componentes/ConsultasMarcadas.js'
import InfoSobreNovaConsulta from './pages/Consultas/InfoSobreNovaConsulta/index'


//

const AppStack = createStackNavigator();

export default function Routes({ route }) {

    return (
      
            <NavigationContainer>
                <AppStack.Navigator
                    screenOptions={{
                        headerShown: false,
                        gestureEnabled: true,
                        gestureDirection: 'horizontal',
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                    initialRouteName='Login'
                >
                    <AppStack.Screen name='Login' component={Login} />
                    <AppStack.Screen name='Cadastro' component={Cadastro} />
                    <AppStack.Screen name='Map' component={Map} />
                    <AppStack.Screen name='Landing' component={Landing} />
                    <AppStack.Screen name='Home' component={Home} />
                    <AppStack.Screen name='Receitas' component={Receitas} />
                    <AppStack.Screen name='DetalheReceitas' component={DetalheReceitas} />
                    <AppStack.Screen name='Profile' component={Profile} />
                    <AppStack.Screen name='SettingScreen' component={SettingScreen} />
                    <AppStack.Screen name='Consultas Marcadas' component={ConsultasMarcadas} />
                    <AppStack.Screen name='InfoSobreNovaConsulta' component={InfoSobreNovaConsulta} />
                </AppStack.Navigator>
            </NavigationContainer>
    );
}