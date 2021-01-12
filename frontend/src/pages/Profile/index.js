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
            <View style={styles.subContainer}>
                <TouchableOpacity style={styles.listButton}>
                    <View style={styles.listButtonIcon}>
                        <Feather size={24} name={'user'}/>
                    </View>
                    <View style={styles.listButtonTxt}>
                        <Text style={styles.listButtonTitle}>Configurações da Conta</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listButton}>
                    <View style={styles.listButtonIcon}>
                        <Feather size={24} name={'settings'}/>
                    </View>
                    <View style={styles.listButtonTxt}>
                        <Text style={styles.listButtonTitle}>Configurações do Aplicativo</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listButton}>
                    <View style={styles.listButtonIcon}>
                        <Feather size={24} name={'lock'}/>
                    </View>
                    <View style={styles.listButtonTxt}>
                        <Text style={styles.listButtonTitle}>Privacidade</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listButton}>
                    <View style={styles.listButtonIcon}>
                        <Feather size={24} name={'info'}/>
                    </View>
                    <View style={styles.listButtonTxt}>
                        <Text style={styles.listButtonTitle}>Sobre</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}