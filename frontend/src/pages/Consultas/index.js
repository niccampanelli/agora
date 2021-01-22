import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Alert, StatusBar, FlatList,Image } from 'react-native';
import styles from './styles';
import gstyles from '../../gstyles';
import { useNavigation } from '@react-navigation/native';
import consultas from '../Consultas/Dados';
import Marcadas from './Componentes/Marcadas'


export default function Consultas() {

    const navigation = useNavigation();

    return (
        <View style={gstyles.container}>
            <View style={styles.header}>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={'#fafafa'}
                />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backbutton}><Feather color={'#bbb'} size={40} name={"chevron-left"} /></TouchableOpacity>
                    <Text style={styles.headerTitle}>Consultas Marcadas</Text>
                </View>
            </View>

            <View>
                <FlatList
                    data={consultas}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) => <Marcadas item={item} />} />
            </View>

            <View style={styles.btnAdd}>
                <TouchableOpacity
                onPress={()=>Alert.alert('pera','modal com adiçao de consultas pelo dados.js')}>
                    <Image
                    source={require('./img/mais.png')}
                    resizeMode='contain'/>
                </TouchableOpacity>
            </View>

        </View>
    );
}