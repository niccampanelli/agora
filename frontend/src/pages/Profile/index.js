import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableHighlight, TouchableOpacity, ScrollView, Button, FlatList } from 'react-native';
import styles from './styles';
import gstyles from '../../gstyles';
import Carousel from '../Components/Carousel';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={gstyles.container}>
            <View style={styles.listButton}>
                <Text style={styles.listButtonTxt}>Configurações da Conta</Text>
            </View>
            <View style={styles.listButton}>
                <Text style={styles.listButtonTxt}>Configurações do App</Text>
            </View>
            <View style={styles.listButton}>
                <Text style={styles.listButtonTxt}>Sobre</Text>
            </View>
            <View style={styles.listButton}>
                <Text style={styles.listButtonTxt}>Privacidade</Text>
            </View>
        </View>
    );
}