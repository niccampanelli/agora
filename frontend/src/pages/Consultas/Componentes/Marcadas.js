import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from '../styles'
import { useNavigation, useRoute } from '@react-navigation/native';


export default function ({item}){

    const navigation = useNavigation()

    return (
        <View style={styles.listaConsultasMarcadas}>
                <TouchableOpacity
                style={{marginStart:"5%"}}
                    onPress={() => navigation.navigate('Consultas Marcadas', { nome: item.title })}>
                    <Text style={styles.consultasTitle}>{item.title}</Text>
                </TouchableOpacity>
                <View  style={{backgroundColor:'yellow',marginEnd:3,borderRadius:10}}>
                <TouchableOpacity
                    style={{height:78,justifyContent:'center',padding:7}}
                    onPress={() => navigation.navigate('Consultas Marcadas', { nome:item.title})} >
                    <Text style={styles.consultasDate}>{item.date}</Text>
                </TouchableOpacity>
                </View>
            </View>
    )
}