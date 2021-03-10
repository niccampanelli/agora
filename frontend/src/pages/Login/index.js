import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView , StatusBar, TextInput, Alert, Button} from 'react-native';
import styles, {mainAppColor, mainTextColor, lightTextColor} from '../../gstyles';
import API from '../../services/api';

export default function Home(){

    const [emailValue, setEmail] = useState('');
    const [passValue, setPass] = useState('')
    const [cpfValue, setCpf] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function BtnHome(props){
        return(
            <View style={styles.button1}>
                <TouchableOpacity activeOpacity={0} style={styles.button1bt} onPress={props.pressFunction}>
                    <Text style={styles.button1tx}>{props.nome}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const data = {
        emailValue, 
        passValue,
        cpfValue,
        firstName,
        lastName,
    }

    async function enviar(){

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

    return(
    <View style={styles.container}>
        <TextInput 
            autoCompleteType={'email'}
            value={emailValue}
            onChange={e => {setEmail(e.target.value)}}
        />
        <TextInput 
            autoCompleteType={'password'}
            value={passValue}
            onChange={e => {setPass(e.target.value)}}
        />
        <TextInput 
            value={cpfValue}
            onChange={e => {setCpf(e.target.value)}}
        />
        <TextInput 
            value={firstName}
            onChange={e => {setFirstName(e.target.value)}}
        />
        <TextInput 
            autoCompleteType={'email'}
            value={lastName}
            onChange={e => {setLastName(e.target.value)}}
        />

        <Button title="enviar" onPress={() => enviar()}/>
    </View>
    );
}