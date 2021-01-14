import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import gstyles from '../../gstyles';
import { useNavigation } from '@react-navigation/native';
import ConfigButton from './Components/ConfigButton';

export default function Home(){

    const navigation = useNavigation();



    return(
        <View style={gstyles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backbutton}><Feather color={'#bbb'} size={40} name={"chevron-left"}/></TouchableOpacity>
                <Text style={styles.headerTitle}>Configurações</Text>
            </View>
            <View style={styles.subContainer}>
                <ConfigButton iconName={'user'} name={'Configurações da Conta'} destination={'SettingScreen'} args={{title: 'Configurações da Conta', page: 'accountconf'}} />
                <ConfigButton iconName={'settings'} name={'Configurações do Aplicativo'} destination={'SettingScreen'} args={{title: 'Configurações do Aplicativo', page: 'appconf'}} />
                <ConfigButton iconName={'lock'} name={'Privacidade'} destination={'SettingScreen'} args={{title: 'Privacidade', page: 'priv'}} />
                <ConfigButton iconName={'info'} name={'Sobre'} destination={'SettingScreen'} args={{title: 'Sobre', page: 'sobre'}} />
            </View>
        </View>
    );
}