import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import gstyles, {mainAppColor, mainTextColor, lightTextColor} from '../../gstyles';
import { useNavigation } from '@react-navigation/native';
import ConfigButton from '../Components/ConfigButton';

export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={gstyles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backbutton}><Feather color={lightTextColor} size={40} name={"chevron-left"}/></TouchableOpacity>
                <Text style={styles.headerTitle}>Configurações</Text>
            </View>
            <View style={styles.subContainer}>
                <ConfigButton iconName={'user'} name={'Dados da Conta'} destination={'SettingScreen'} args={{title: 'Dados da Conta', page: 'conta'}} />
                <ConfigButton iconName={'settings'} name={'Configurações do Aplicativo'} destination={'SettingScreen'} args={{title: 'Configurações do Aplicativo', page: 'appconf'}} />
                <ConfigButton iconName={'lock'} name={'Privacidade'} destination={'SettingScreen'} args={{title: 'Privacidade', page: 'privacidade'}} />
                <ConfigButton iconName={'info'} name={'Sobre'} destination={'SettingScreen'} args={{title: 'Sobre', page: 'sobre'}} />
            </View>
        </View>
    );
}