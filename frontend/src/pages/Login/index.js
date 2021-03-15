import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert,StatusBar } from 'react-native';
import BtnHome from '../Components/BtnHome';
import gstyles, {mainAppColor, mainTextColor, lightTextColor} from '../../gstyles';
import styles from '../Cadastro/styles';
import API from '../../services/api';
import { ScrollView } from 'react-native-gesture-handler';

export default function Cadastro(props) {

    


    const [emailValue, setEmail] = useState('');
    const [passValue, setPass] = useState('')

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
           
           <View style={styles.loginCard}>
            <View style={styles.loginHeader}>
                <Text style={styles.loginTitle}>Olá!</Text>
                <Text style={styles.loginTitle}>Faça login no Agora</Text>
                <Text style={styles.loginSubtitle}>Entre com email e senha para acessar a plataforma e suas funções!</Text>
            </View>
            <View style={styles.inputsArea}>
                
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
                <BtnHome nome={'Entrar'} pressFunction={() => props.navigation.navigate('Home')}/>
            </View>

            <Text style={styles.hintText}>Se ainda não está cadastrado no Agora:</Text>
            <Text style={styles.hintLink} onPress={() => props.navigation.navigate('Cadastro')}>Cadastre-se!</Text>
        </View>
        </View>
    );
}