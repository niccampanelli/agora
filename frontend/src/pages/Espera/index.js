import AppLoading from 'expo-app-loading'
import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import {observador} from '../../middleware/userController'
import img from '../../../assets/iconeAgora.jpg'
import { CommonActions } from '@react-navigation/native'; 
export default function Espera(props){
    
        useEffect(()=>{
            observador(props,CommonActions,'Home')
        },[])

    return(
        <View >
            <AppLoading/>
        </View>
    )
}