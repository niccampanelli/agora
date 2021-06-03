import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import LandingVector from '../../assets/landingVectorPreset.png';
import styles from './styles';
import style from './styles';
import { CommonActions } from '@react-navigation/native'; 
import { observador } from '../../middleware/userController';

export default function Landing(props){

    return(
        <View style={styles.container}>
            <View style={styles.overlay}>
                <Text style={style.title}>Bem-Vindo ao Agora!</Text>
                <Text style={style.subTitle}>Aqui você pode controlar e visualizar suas consultas marcadas.</Text>
                <TouchableOpacity style={styles.nextButton} onPress={() =>observador(props) }>
                    <Text style={styles.nextButtonText}>Continuar</Text>
                </TouchableOpacity>
            </View>
            <Image style={style.landingImage} resizeMode={'cover'} source={LandingVector}/>
        </View>
    );
}