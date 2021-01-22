import { useBackButton } from '@react-navigation/native';
import React, { useState } from 'react'
import { Alert, StyleSheet, Modal, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles'
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import InfoSobreNovaConsulta from '../InfoSobreNovaConsulta';

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
            <View style={styles.containerModal}>

                <TouchableOpacity
                    style={{ width: '25%', height: '95%' }}
                    onPress={() => navigation.navigate('InfoSobreNovaConsulta',{nome:item.nome,local:item.local})}
                >
                    <Text style={styles.consultasTitle}>logo</Text>

                </TouchableOpacity>

                <View style={{ backgroundColor: '#fff', borderRadius: 10, width: "60%", alignItems: 'center' }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('InfoSobreNovaConsulta',{nome:item.nome,local:item.local})}
                        style={{ height: 78, justifyContent: 'center' }}
                    >
                        <Text style={styles.consultasTitle}>{item.nome}</Text>
                        <Text style={styles.consultasDate}>{item.local}</Text>

                    </TouchableOpacity>

                </View>

                <View >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('InfoSobreNovaConsulta')}>
                        <Feather color={'#bbb'} size={40} name={"chevron-right"} />
                    </TouchableOpacity>
                </View>

            </View>
        )

    }



    return (

        <View style={Styles.container}>
            <Text style={Styles.Hosp}>Escolha um Hospital:</Text>
            <FlatList
                data={hosp}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <ListaHosp item={item} />} />
        </View>

    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 1
    },
    Hosp: {
        fontSize: 22
    }
})