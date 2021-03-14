import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BtnHome from '../Components/BtnHome';
import gstyles, {mainAppColor, mainTextColor, lightTextColor} from '../../gstyles';
import styles from './styles';
import API from '../../services/api';

export default function Home(){

    const navigator = useNavigation();

    const [emailValue, setEmail] = useState('');
    const [passValue, setPass] = useState('')
    const [cpfValue, setCpf] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

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
    <View style={gstyles.container}>
        <View style={styles.loginCard}>
            <View style={styles.loginHeader}>
                <Text style={styles.loginTitle}>Olá!</Text>
                <Text style={styles.loginTitle}>Cadastre-se no Agora</Text>
                <Text style={styles.loginSubtitle}>Crie uma conta para poder acessar a plataforma e suas funções!</Text>
            </View>
            <View style={styles.inputsArea}>
                <Text style={styles.inputLabel}>Nome</Text>
                <TextInput
                    returnKeyType={'next'}
                    keyboardType={"default"}
                    clearButtonMode={"while-editing"}
                    autoCorrect={false}
                    autoCapitalize={'words'}
                    autoCompleteType={'name'}
                    style={styles.loginInput}
                    placeholder={"Fulano"}
                    value={firstName}
                    onChange={e => {setFirstName(e.target.value)}}
                />
                <Text style={styles.inputLabel}>Sobrenome</Text>
                <TextInput
                    returnKeyType={'next'}
                    keyboardType={"default"}
                    clearButtonMode={"while-editing"}
                    autoCorrect={false}
                    autoCapitalize={'words'}
                    autoCompleteType={'name'}
                    style={styles.loginInput}
                    placeholder={"da Silva"}
                    value={lastName}
                    onChange={e => {setLastName(e.target.value)}}
                />
                <View style={styles.labelView}>
                    <Text style={styles.inputLabel}>CPF</Text>
                    <Text style={styles.labelHint}> • Insira apenas números</Text>
                </View>
                <TextInput
                    maxLength={11}
                    returnKeyType={'next'}
                    keyboardType={"numeric"}
                    clearButtonMode={"while-editing"}
                    style={styles.loginInput}
                    placeholder={"Ex: 12345678910"}
                    value={cpfValue}
                    onChange={e => {setCpf(e.target.value)}}
                />
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    returnKeyType={'next'}
                    keyboardType={'email-address'}
                    clearButtonMode={"while-editing"}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    autoCompleteType={'email'}
                    style={styles.loginInput}
                    placeholder={"exemplo@email.com"}
                    value={emailValue}
                    onChange={e => {setEmail(e.target.value)}}
                />
                <View style={styles.labelView}>
                    <Text style={styles.inputLabel}>Senha</Text>
                    <Text style={styles.labelHint}> • Mínimo de 6 caracteres</Text>
                </View>
                <TextInput
                    secureTextEntry
                    returnKeyType={'done'}
                    keyboardType={'default'}
                    clearButtonMode={"while-editing"}
                    style={styles.loginInput}
                    placeholder={"Insira sua senha"}
                    autoCompleteType={'password'}
                    value={passValue}
                    onChange={e => {setPass(e.target.value)}}
                />
            </View>

            <View style={styles.buttonArea}>
                <BtnHome nome={'Continuar'} pressFunction={() => navigator.navigate('Home')}/>
            </View>

            <Text style={styles.hintText}>Se voce já está cadastrado no Agora:</Text>
            <Text style={styles.hintLink} onPress={() => {}}>Acesse sua conta!</Text>
        </View>
    </View>
    );
}