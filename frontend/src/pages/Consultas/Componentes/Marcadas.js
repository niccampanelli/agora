import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import gstyles from '../../../gstyles';
import { useNavigation, useRoute } from '@react-navigation/native';


export default function ({item}){

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={gstyles.listTextButton} onPress={() => navigation.navigate('Consultas Marcadas', { nome: item.especialidade })}>
            <View style={gstyles.listButtonIcon}>
                <Feather size={24} name={'calendar'}/>
            </View>
            <View style={gstyles.listButtonTxt}>
                <View style={gstyles.listButtonExtra}>
                    <Text style={gstyles.listButtonTitle}>{item.especialidade}</Text>
                    <Text style={gstyles.listButtonDesc}>{item.date}</Text>
                </View>
                <Text style={gstyles.listButtonDesc}>{item.nomeMedico}</Text>
            </View>
        </TouchableOpacity>
    )
}