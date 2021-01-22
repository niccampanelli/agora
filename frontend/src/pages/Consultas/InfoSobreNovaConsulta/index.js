import React from 'react'
import { Text, View } from 'react-native'


export default function ({route}){

    const {nome,local}=route.params


    return(
        <View>
            <Text>
                Deu certo!{JSON.stringify(nome)}{JSON.stringify(local)}
            </Text>
        </View>
    )
}