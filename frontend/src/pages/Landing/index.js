import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import LandingVector from '../../assets/landingVectorPreset.png';
import styles from './styles';
import style from './styles';

export default function Landing(){
    
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.overlay}>
                <Text style={style.title}>Bem-Vindo ao Agora!</Text>
                <Text style={style.subTitle}>Aqui você pode controlar e visualizar suas consultas marcadas.</Text>
                <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Home') }>
                    <Text style={styles.nextButtonText}>Continuar</Text>
                </TouchableOpacity>
            </View>
            <Image style={style.landingImage} resizeMode={'cover'} source={LandingVector}/>
        </View>
    );
}