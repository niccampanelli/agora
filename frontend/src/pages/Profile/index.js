import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import gstyles from '../../gstyles';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={gstyles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backbutton}><Feather color={'#bbb'} size={40} name={"chevron-left"}/></TouchableOpacity>
                <Text style={styles.headerTitle}>Configurações</Text>
            </View>
        </View>
    );
}