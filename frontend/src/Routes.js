import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SettingScreen from './pages/Profile/SettingScreen';
import Consultas from './pages/Consultas';
import ConsultasMarcadas from './pages/Consultas/Componentes/ConsultasMarcadas.js'

const AppStack = createStackNavigator();

export default function Routes({route}){
    return(
        <NavigationContainer>
            <AppStack.Navigator 
                screenOptions={{ 
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS 
                }}    
            >
                <AppStack.Screen name='Home' component={Home}/>
                <AppStack.Screen name='Consultas' component={Consultas}/>
                <AppStack.Screen name='Profile' component={Profile}/>
                <AppStack.Screen name='SettingScreen' component={SettingScreen}/>
                <AppStack.Screen name='Consultas Marcadas' component={ConsultasMarcadas} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}