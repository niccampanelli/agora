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

    const Sobre = () => (
        <View style={styles.subContainer}>
            <ConfigButton iconName={'file-text'} name={'Termos e Condições de Uso'} destination={''} />
            <ConfigTextButton iconName={'package'} name={'Versão do Aplicativo'} desc={'5.12.38'} destination={''} args={''}/>
            <ConfigTextButton iconName={'users'} name={'Criado por'} desc={'Nicholas Campanelli de Souza, Rafael da Silva Rodrigues'} destination={''} args={''}/>
        </View>
    );      

    const pages = {
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