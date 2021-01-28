import { useBackButton } from '@react-navigation/native';
import React, { useState } from 'react'
import { Alert, stylesheet, Modal, View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './styles'
import { Feather } from '@expo/vector-icons';
import img from '../../../assets/ubs-unidade-basica-de-saude-logo-5FA6837F13-seeklogo.com.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import InfoSobreNovaConsulta from '../InfoSobreNovaConsulta';
import gstyles from '../../../gstyles';

export default function (props) {

    const navigation = useNavigation();
    const AppStack = createStackNavigator()

    const hosp = [
        { id: 1, nome: 'hospital 1', local: 'Rua do 1, sao paulo' },
        { id: 2, nome: 'hospital 2', local: 'Rua do 2, sao paulo' },
        { id: 3, nome: 'hospital 3', local: 'Rua do 3, sao paulo' },
        { id: 4, nome: 'hospital 4', local: 'Rua do 4, sao paulo' },
        { id: 5, nome: 'hospital 5', local: 'Rua do 5, sao paulo' },

    ]


    const ListaHosp = ({ item }) => {
        return (
            <TouchableOpacity style={gstyles.listTextButton} onPress={() => navigation.navigate('InfoSobreNovaConsulta',{nome:item.nome,local:item.local})}>
                <View style={gstyles.listButtonImg}>
                    <Image style={gstyles.listButtonImgImage} source={img}/>
                </View>
                <View style={gstyles.listButtonTxt}>
                    <Text style={gstyles.listButtonTitle}>{item.nome}</Text>
                    <Text style={gstyles.listButtonDesc}>{item.local}</Text>
                </View>
                <View style={styles.buttonEnter}>
                    <Feather size={40} name={'chevron-right'}/>
                </View>
            </TouchableOpacity>
        )
    }

    return (

        <View style={styles.container}>
            <FlatList
                style={styles.hospList}
                data={hosp}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <ListaHosp item={item} />} />
        </View>

    )
}