import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import gstyles from '../../../gstyles';
import { useNavigation, useRoute } from '@react-navigation/native';
import ConfigButton from '../Components/ConfigButton';
import ConfigTextButton from '../Components/ConfigTextButton';

export default function Home(){

    const route = useRoute();
    const navigation = useNavigation();

    const title = route.params.title;
    const pageName = route.params.page;

    const Conta = () => (
        <View style={styles.subContainer}>
            <ConfigTextButton iconName={'user'} name={'Nome'} desc={'Nicholas Campanelli de Souza'} destination={''} args={''}/>
            <ConfigTextButton iconName={'credit-card'} name={'CPF'} desc={'268.457.984-45'} destination={''} args={''}/>
            <ConfigTextButton iconName={'mail'} name={'Endereço de Email'} desc={'nicholascampanelli@outlook.com'} destination={''} args={''}/>
            <ConfigTextButton iconName={'key'} name={'Senha'} desc={'************'} destination={''} args={''}/>
            <TouchableOpacity style={styles.listButtonRed} onPress={() => {}}>
                <View style={styles.listButtonIconRed}>
                    <Feather size={24} name={'trash-2'} color={'#fff'}/>
                </View>
                <View style={styles.listButtonTxt}>
                    <Text style={styles.listButtonTitle}>Excluir Cadastro</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    const Privacidade = () => (
        <View style={styles.subContainer}>
            <ConfigButton iconName={'file-text'} name={'Uso de dados'} destination={''} />
        </View>
    );

    const Sobre = () => (
        <View style={styles.subContainer}>
            <ConfigButton iconName={'file-text'} name={'Termos e Condições de Uso'} destination={''} />
            <ConfigTextButton iconName={'package'} name={'Versão do Aplicativo'} desc={'5.12.38'} destination={''} args={''}/>
            <ConfigTextButton iconName={'users'} name={'Criado por'} desc={'Nicholas Campanelli de Souza, Rafael da Silva Rodrigues'} destination={''} args={''}/>
        </View>
    );      

    const pages = {
        conta: <Conta/>,
        privacidade: <Privacidade/>,
        sobre: <Sobre/>
    };

    return(
        <View style={gstyles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backbutton}><Feather color={'#bbb'} size={40} name={"chevron-left"}/></TouchableOpacity>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
            {pages[pageName]}
        </View>
    );
}