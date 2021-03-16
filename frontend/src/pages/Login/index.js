import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert,StatusBar, Button } from 'react-native';
import BtnHome from '../Components/BtnHome';
import gstyles, {mainAppColor, mainTextColor, lightTextColor} from '../../gstyles';
import styles from '../Cadastro/styles';
import API from '../../services/api';
import { ScrollView } from 'react-native-gesture-handler';


export default function Login(props) {


    const [emailValue, setEmail] = useState('');
    const [passValue, setPass] = useState('')

    const data = {
        emailValue,
        passValue,
    }


   /**
    *  useEffect(()=>{
        async function obs(){
           const res = await API.post('observador')
           if(res == 1)
           props.navigation.navigate('Home')
        }
        obs()
    })
    */


    async function enviar() {
        console.log("ta indo")
        console.log(passValue)
        console.log(emailValue)
        try {
            const response =  API.post('login', data);
            Alert.alert(emailValue, JSON.stringify(response));
            props.navigation.navigate('Home')
            console.log("Finalizado")
             

        }
        catch (err) {
            console.log(err)
            Alert.alert('Erro ao logar'+ err);
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
                <BtnHome nome={'Entrar'}  pressFunction={()=>enviar()}/>
                <Button title='entrar2' onPress={()=>enviar()} />
            </View>

            <Text style={styles.hintText}>Se ainda não está cadastrado no Agora:</Text>
            <Text style={styles.hintLink} onPress={() => props.navigation.navigate('Cadastro')}>Cadastre-se!</Text>
        </View>
        </View>
    );
}