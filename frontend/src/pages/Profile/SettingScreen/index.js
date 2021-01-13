import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import gstyles from '../../../gstyles';
import { useNavigation, useRoute } from '@react-navigation/native';
import ConfigButton from '../Components/ConfigButton';

export default function Home(){

    const route = useRoute();
    const navigation = useNavigation();

    const title = route.params.title;

    return(
        <View style={gstyles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backbutton}><Feather color={'#bbb'} size={40} name={"chevron-left"}/></TouchableOpacity>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
            <View style={styles.subContainer}>
                <ConfigButton iconName={'user'} name={'Configurações da Conta'} destination={''} />
            </View>
        </View>
    );
}