
import React from 'react'
import { Text, View, TouchableOpacity, Fea, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons';



export default function Marcadas({ route, navigation }) {
    const { nome, id } = route.params;
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', marginTop: '5%' }}>
            <StatusBar
                barStyle='dark-content' />
            <TouchableOpacity onPress={() => navigation.goBack()} style={{
                marginLeft: -10,
                marginBottom: 10,
                width: 30,
                height: 40
            }}
            ><Feather color={'#bbb'} size={40} name={"chevron-left"} />
            </TouchableOpacity>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginStart: '15%', alignItems: 'center' }}>{JSON.stringify(nome)}</Text>

        </View>
    )
}