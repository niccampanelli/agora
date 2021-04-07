import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput, Alert, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BtnHome from '../Components/BtnHome';
import gstyles, { mainAppColor, mainTextColor, lightTextColor } from '../../gstyles';
import styles from './styles';
import API from '../../services/api';
import { cadastrar, observador,pegarDadosUser } from '../../middleware/userController';
import ContextUser from '../../context/UserContext';


export default function Cadastro(props) {

    const { setUserInfo } = useContext(ContextUser)

    const navigator = useNavigation();

    const [emailValue, setEmail] = useState('');
    const [passValue, setPass] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [CPF, setCPF] = useState('');

    useEffect(()=>{
        observador(props)
    },[])

    return (
        <View style={styles.container}>
            <StatusBar
            barStyle='dark-content'
            backgroundColor={mainAppColor}
            />
            <ScrollView>
                <View style={styles.loginCard}>
                    <View style={styles.loginHeader}>
                        <Text style={styles.loginTitle}>Olá!</Text>
                        <Text style={styles.loginTitle}>Cadastre-se no Agora</Text>
                        <Text style={styles.loginSubtitle}>Crie uma conta para poder acessar a plataforma e suas funções!</Text>
                    </View>
                    
                        <Text style={styles.inputLabel}>Nome</Text>
                        <TextInput
                            autoCompleteType={'name'}
                            style={styles.loginInput}
                            placeholder={"Fulano"}
                            value={firstName}
                            onChangeText={e => setFirstName(e)}
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
                            onChangeText={e => setLastName(e)}
                        />
                        <Text style={styles.inputLabel} >CPF</Text>
                        <TextInput
                            returnKeyType={'next'}
                            keyboardType={"number-pad"}
                            clearButtonMode={"while-editing"}
                            style={styles.loginInput}
                            placeholder={"xxx.xxx.xxx-xx"}
                            
                            value={CPF}
                            onChangeText={e => setCPF(e)}
                        />
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
                            style={styles.loginInput}
                            placeholder={"Insira sua senha"}
                            autoCompleteType={'password'}
                            value={passValue}
                            onChangeText={e => setPass(e)}
                        />
                    <View style={styles.sendArea}>
                        <View style={styles.buttonArea}>
                            <BtnHome nome={'Continuar'} pressFunction={() =>{
                                cadastrar(
                                    emailValue,
                                    passValue,
                                    CPF,
                                    firstName,
                                    lastName)
                                    .then(user=>{
                                        pegarDadosUser().then(setUserInfo)
                                        props.navigation.navigate('Home')})
                            }} />
                        </View>

                        <Text style={styles.hintText}>Se voce já está cadastrado no Agora:</Text>
                        <TouchableOpacity onPress={() => navigator.replace('Login')}>
                            <Text style={styles.hintLink} >Toque aqui e acesse sua conta!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
