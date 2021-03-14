import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, TextInput, Alert, Button } from 'react-native';
import  {mainAppColor} from '../../gstyles';
import styles from './styles';
import API from '../../services/api';

export default function Cadastro(props) {

    const [emailValue, setEmail] = useState('');
    const [passValue, setPass] = useState('')
    const [cpfValue, setCpf] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    /**
     * 
        function BtnHome(props){
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
        cpfValue,
        firstName,
        lastName,
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
            <Text style={styles.title}>Cadastro</Text>
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
            <TextInput
                value={cpfValue}
                placeholder='CPF'
                style={styles.input}
                onChangeText={e => { setCpf(e) }}
            />
            <TextInput
                value={firstName}
                placeholder='Primeiro Nome'
                style={styles.input}
                onChangeText={e => { setFirstName(e) }}
            />
            <TextInput
                autoCompleteType={'email'}
                placeholder="Ultimo Nome"
                style={styles.input}
                value={lastName}
                onChangeText={e => { setLastName(e) }}
            />

            <TouchableOpacity
                style={styles.btnEntrar}
                onPress={() => enviar} >
                <Text style={{ fontSize: 20 }}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.cadOuEntrar}
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={{ color: 'gray' }}> Já tem uma conta? Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}