import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, TextInput, Alert, Button } from 'react-native';
import styles from './styles'
import gstyles, { mainAppColor, mainTextColor, lightTextColor } from '../../gstyles';
import API from '../../services/api';

export default function Login(props) {

    const [emailValue, setEmail] = useState('');
    const [passValue, setPass] = useState('')

    /**
     *  function BtnHome(props){
         return(
             <View style={styles.button1}>
                 <TouchableOpacity activeOpacity={0} style={styles.button1bt} onPress={props.pressFunction}>
                     <Text style={styles.button1tx}>{props.nome}</Text>
                 </TouchableOpacity>
             </View>
         )
     }
     */

    const data = {
        emailValue,
        passValue,
    }

    async function enviar() {

        console.log(emailValue);

        try {
            const response = await API.post('login', data);
            Alert.alert(emailValue, JSON.stringify(response));
        }
        catch (err) {
            console.log(err)
            Alert.alert('Erro ao cadastrar caso, tente novamente mais tarde.', err.toString());
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='dark-content'
                backgroundColor={mainAppColor}
            />
            <Text style={styles.title}>Login</Text>
            <TextInput
                autoCompleteType={'email'}
                value={emailValue}
                style={styles.input}
                placeholder='Email'
                onChangeText={e => { setEmail(e) }}
            />
            <TextInput
                autoCompleteType={'password'}
                value={passValue}
                placeholder='Senha'
                style={styles.input}
                onChangeText={e => { setPass(e) }}
            />
            <TouchableOpacity
                style={styles.btnEntrar}
                onPress={() => enviar} >
                <Text style={{fontSize:20}}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.cadOuEntrar}
                onPress={() => props.navigation.navigate('Cadastro')}>
                <Text style={{color:'gray'}}> Ainda não tem uma conta? Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
}