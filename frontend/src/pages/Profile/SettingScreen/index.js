import React, { useContext, useRef, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Modal, Alert } from 'react-native';
import styles from './styles';
import gstyles, { mainAppColor, mainTextColor, lightTextColor, layer0Color } from '../../../gstyles';
import { useNavigation, useRoute } from '@react-navigation/native';
import ConfigButton from '../../Components/ConfigButton';
import ConfigTextButton from '../../Components/ConfigTextButton';
import ContextUser from '../../../context/UserContext';
import { deletar, logar, setUserData } from '../../../middleware/userController';

export default function Home(){

    const { state } = useContext(ContextUser)

    const [isEditingInfo, setInfoEditing] = useState(false);

    const [isModalVisible, setModalVisible] = useState(false);
    const [modalPage, setModalPage] = useState();
    const [afterLoginFn, setAfterLoginFn] = useState();

    const emailRef = useRef();
    const passRef = useRef();

    const [overEmailValue, setOverEmailValue] = useState();
    const [overPassValue, setOverPassValue] = useState();
    
    const route = useRoute();
    const navigation = useNavigation();

    const title = route.params.title;
    const subTitle = route.params.subTitle;
    const pageName = route.params.page;

    const openLogin = () => {
        setModalVisible(true);
        setModalPage('relogin');
    }

    const showBottomSheet = (title, page) => {
        setBottomSheetEnabled(true);
        setBottomSheetTitle(title);
        setBottomSheetPage(page);
    }

    const Conta = () => (
        <ScrollView style={styles.subContainer}>
            <ConfigTextButton iconName={'user'} name={'Nome'} desc={state.firstName} destination={'SettingScreen'} args={''}/>
            <ConfigTextButton iconName={'credit-card'} name={'CPF'} desc={state.CPF} destination={'SettingScreen'} args={''}/>
            <ConfigTextButton iconName={'mail'} name={'Endereço de Email'} desc={state.email} destination={'SettingScreen'} args={''}/>
            <ConfigTextButton iconName={'key'} name={'Senha'} desc={'************'} destination={'SettingScreen'} args={''}/>
            <TouchableOpacity style={styles.listButtonRed} onPress={() => {setModalVisible(true); setModalPage('delete')}}>
                <View style={styles.listButtonIconRed}>
                    <Feather size={24} name={'trash-2'} color={'#fff'}/>
                </View>
                <View style={styles.listButtonTxt}>
                    <Text style={styles.listButtonTitle}>Excluir Cadastro</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );

    const Privacidade = () => (
        <View style={styles.subContainer}>
            <ConfigButton iconName={'file-text'} name={'Uso de dados'} destination={'SettingScreen'} />
        </View>
    );

    const Sobre = () => (
        <View style={styles.subContainer}>
            <ConfigButton iconName={'file-text'} name={'Termos e Condições de Uso'}/>
            <ConfigTextButton iconName={'package'} name={'Versão do Aplicativo'} desc={'5.12.38'}/>
            <ConfigTextButton iconName={'users'} name={'Criado por'} desc={'Nicholas Campanelli de Souza, Rafael da Silva Rodrigues'}/>
        </View>
    );

    const DataChange = () => {
        const [emailValue, setEmail] = useState(state.email);
        const [passValue, setPass] = useState('********');

        const setData = () => {
            setOverEmailValue(emailValue);
            setOverPassValue(passValue);
            setAfterLoginFn('datachange');
            openLogin();
        };

        return (
            <View style={gstyles.bottomSheet}>
                <View style={gstyles.bottomSheetInfo}>
                    <Text style={gstyles.bottomSheetTitle}>Atualizar Dados</Text>
                    <Text style={styles.listButtonDesc}>Aqui você pode atualizar seu endereço de email e sua senha.</Text>
                </View>
                <View style={gstyles.bottomSheetPage}>
                    <TouchableOpacity style={styles.listInputButton} onPress={() => {emailRef.current.focus()}}>
                        <View style={styles.listButtonIcon}>
                            <Feather size={24} name={'mail'}/>
                        </View>
                        <View style={styles.listButtonTxt}>
                            <Text style={styles.listButtonTitle}>Novo Email</Text>
                                <TextInput 
                                    ref={emailRef}
                                    style={styles.listButtonInput}
                                    autoCompleteType={'email'}
                                    value={emailValue}
                                    onChangeText={text => setEmail(text)}
                                />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listInputButton} onPress={() => {passRef.current.focus()}}>
                        <View style={styles.listButtonIcon}>
                            <Feather size={24} name={'key'}/>
                        </View>
                        <View style={styles.listButtonTxt}>
                            <Text style={styles.listButtonTitle}>Nova Senha</Text>
                                <TextInput 
                                    ref={passRef}
                                    style={styles.listButtonInput}
                                    autoCompleteType={'password'}
                                    secureTextEntry
                                    value={passValue}
                                    onChangeText={text => setPass(text)}
                                />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.listButtonDesc}>Por motivos de segurança, para confirmar a atualização, será enviado um email no endereço indicado.</Text>
                </View>
                <View style={gstyles.bottomSheetOptions}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={gstyles.bottomSheetOptionsTxt}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setData()}>
                        <Text style={gstyles.bottomSheetOptionsTxt}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const Delete = () => (
        <View style={gstyles.bottomSheet}>
            <View style={gstyles.bottomSheetInfo}>
                <Text style={gstyles.bottomSheetTitle}>Tem Certeza?</Text>
                <Text style={styles.listButtonDesc}>A exclusão do cadastro na plataforma "AGORA" apaga todos os dados do usuário no banco de dados.</Text>
                <Text style={styles.listButtonDesc}>Esta exclusão é permanente e não pode ser desfeita.</Text>
            </View>
            <View style={gstyles.bottomSheetOptions}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={gstyles.bottomSheetOptionsTxt}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setAfterLoginFn('delete'); openLogin()}}>
                    <Text style={gstyles.bottomSheetOptionsTxt}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const ReLogin = () => {
        const [emailValue, setEmail] = useState('');
        const [passValue, setPass] = useState('');

        const loginAndContinue = () => {
            logar(emailValue, passValue).then(() => {
                switch (afterLoginFn) {
                    case 'delete':
                        console.log('chegou no delete');
                        deletar().then(() => {
                            Alert.alert('Cadastro Excluído.', 'O seu cadastro no Agora foi excluído com sucesso!')
                            navigation.navigate('Login');
                        })
                        break;
                
                    case 'datachange':
                        if(overEmailValue !== state.email && overPassValue === '********'){
                            setUserData('email', overEmailValue).then(() => {
                                Alert.alert('Email Alterado com Sucesso', 'O endereço de email vinculado a sua conta foi alterado.')
                                navigation.navigate('Home');
                            }).catch(e => {
                                throw e;
                            });
                        }
                        else if(overEmailValue === state.email && overPassValue !== '********'){
                            setUserData('password', undefined).then(() => {
                                Alert.alert('Email de Confirmação Enviado.', 'Confirme a alteração no enviado para a sua caixa de email.')
                                navigation.navigate('Home');
                            }).catch(e => {
                                throw e;
                            });
                        }
                        else if(overEmailValue !== state.email && overPassValue !== '********'){
                            setUserData('emailpassword', overEmailValue).then(() => {
                                Alert.alert('Dados Alterados.', 'Confirme a alteração no enviado para o seu novo email.')
                                navigation.navigate('Home');
                            }).catch(e => {
                                throw e;
                            });
                        }
                        break;
                    
                    default:
                        break;
                }
            }).catch(e => {
                console.error(e);
            })
        }

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.loginCard}>
                        <View style={styles.loginHeader}>
                            <Text style={styles.loginTitle}>Faça login para continuar</Text>
                            <Text style={styles.loginSubtitle}>Entre com email e senha para prosseguir.</Text>
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
                                <Text style={styles.labelHint}> • Esqueci Minha Senha</Text>
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
                            <TouchableOpacity activeOpacity={0} style={gstyles.button1bt} onPress={() => loginAndContinue()}>
                                <Text style={gstyles.button1tx}>Prosseguir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </ScrollView>
            </View>
        );
    };

    const pages = {
        conta: <Conta/>,
        privacidade: <Privacidade/>,
        sobre: <Sobre/>,
        datachange: <DataChange/>,
        delete: <Delete/>,
        relogin: <ReLogin/>
    };

    return(
        <View style={gstyles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backbutton}><Feather color={lightTextColor} size={40} name={"chevron-left"}/></TouchableOpacity>
            <View style={styles.header}>
                {
                    pageName == 'conta' ?
                    <View style={styles.headerWithOption}>
                        <Text style={styles.headerTitle}>{title}</Text>
                        <TouchableOpacity style={styles.infoEdit} onPress={() => {setModalVisible(true); setModalPage('datachange')}}>
                            <Feather name={'edit'} color={lightTextColor} size={30}/>
                        </TouchableOpacity>
                    </View>
                    :
                    <View>
                        <Text style={styles.headerTitle}>{title}</Text>
                    </View>
                }
                <Text style={styles.headerSubTitle}>{subTitle}</Text>
            </View>
            {pages[pageName]}
            
            {isModalVisible ? <View style={gstyles.bottomSheetBackground}/> : <Text/>}
            <Modal transparent animationType={'slide'} visible={isModalVisible}>
                {pages[modalPage]}
            </Modal>

        </View>
    );
}