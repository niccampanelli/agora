
import React from 'react'
import { Text, View, TouchableOpacity, Fea, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from '../styles'
import { useNavigation, useRoute } from '@react-navigation/native';


export default function ({item}){

    const navigation = useNavigation()

    return (
        <View style={styles.listaConsultasMarcadas}>
                <TouchableOpacity
                style={{marginStart:"5%"}}
                    onPress={() => navigation.navigate('Consultas Marcadas', { nome: item.especialidade })}>
                    <Text style={styles.consultasTitle}>{item.especialidade}</Text>
                </TouchableOpacity>
                <View  style={{backgroundColor:'yellow',marginEnd:0,borderRadius:10,width:"20%",alignItems:'center'}}>
                <TouchableOpacity
                    style={{height:78,justifyContent:'center',padding:0}}
                    onPress={() => navigation.navigate('Consultas Marcadas', { nome:item.especialidade})} >
                    <Text style={styles.consultasDate}>{item.date}</Text>
                </TouchableOpacity>
                </View>
            </View>
    )
}