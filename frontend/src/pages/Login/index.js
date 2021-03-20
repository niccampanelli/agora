import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import BtnHome from '../Components/BtnHome';
import gstyles from '../../gstyles';
import styles from './styles';
import API from '../../services/api';
import { logar } from '../../middleware/userController';

import { observador } from '../../middleware/userController'

export default function Login(props) {

    const [emailValue, setEmail] = useState('');
    const [passValue, setPass] = useState('')

    const data = {
        emailValue,
        passValue,
    }

    useEffect(()=>{
        observador(props)
    },[])

    return (
        <View style={gstyles.container}>           
           <View style={styles.loginCard}>
            <View style={styles.loginHeader}>
                <Text style={styles.loginTitle}>Olá!</Text>
                <Text style={styles.loginTitle}>Faça login no Agora</Text>
                <Text style={styles.loginSubtitle}>Entre com email e senha para acessar a plataforma e suas funções!</Text>
            </View>
            <View style={styles.inputsArea}>
                <Text style={styles.inputLabel}>Endereço de Email</Text>
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
                    onChangeText={e => setEmail(e)}
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
                    onChangeText={e => setPass(e)}
                />
            </View>

            <View style={styles.buttonArea}>
                <BtnHome nome={'Entrar'}  pressFunction={()=>logar(emailValue,passValue).then(props.navigation.navigate('Home'))}/>
            </View>

            <Text style={styles.hintText}>Se ainda não está cadastrado no Agora:</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Cadastro')}>
                <Text style={styles.hintLink}>Toque aqui e cadastre-se!</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}