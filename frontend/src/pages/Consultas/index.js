import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Alert, TouchableHighlight, Button, StatusBar } from 'react-native';
import styles from './styles';
import gstyles from '../../gstyles';
import Consultass from "../Consultas/Dados";
import { useNavigation } from '@react-navigation/native';

export default function Consultas(){

    const navigation = useNavigation();

    return(
        <View style={gstyles.container}>
            <View style={styles.header}>
                <StatusBar
                barStyle='dark-content'
                backgroundColor={'#fafafa'}
                />
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backbutton}><Feather color={'#bbb'} size={40} name={"chevron-left"}/></TouchableOpacity>
                <Text style={styles.headerTitle}>Consultas Marcadas</Text>
                </View>
                <View style={styles.listaConsultasMarcadas}>
                    {Consultass.map((consulta, index) => (
                        <View key={consulta.title} style={styles.consultasList}>
                            <TouchableOpacity
                            onPress={()=> navigation.navigate('Consultas Marcadas',{nome:consulta.title,id:index})}>
                                <Text  style={styles.consultasTitle}>{consulta.title}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                             onPress={()=>  navigation.navigate('Consultas Marcadas',{nome:consulta.title,id:index}) } >
                                <Text style={styles.consultasDate}>{consulta.date}</Text>
                            </TouchableOpacity>
                            
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}