import React, { useRef, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native';
import styles from './styles';
import gstyles, { mainAppColor, mainTextColor, lightTextColor, layer0Color } from '../../../gstyles';
import { useNavigation, useRoute } from '@react-navigation/native';
import ConfigButton from '../../Components/ConfigButton';
import ConfigTextButton from '../../Components/ConfigTextButton';

export default function Home(){

    const [isEditingInfo, setInfoEditing] = useState(false);

    const [isModalVisible, setModalVisible] = useState(false);
    const [modalPage, setModalPage] = useState();

    const [emailValue, setEmail] = useState('nicholascampanelli@outlook.com');
    const [passValue, setPass] = useState('************');

    const emailRef = useRef();
    const passRef = useRef();

    const route = useRoute();
    const navigation = useNavigation();

    const title = route.params.title;
    const subTitle = route.params.subTitle;
    const pageName = route.params.page;

    const showBottomSheet = (title, page) => {
        setBottomSheetEnabled(true);
        setBottomSheetTitle(title);
        setBottomSheetPage(page);
    }

    const Conta = () => (
        <ScrollView style={styles.subContainer}>
            <ConfigTextButton iconName={'user'} name={'Nome'} desc={'Nicholas Campanelli de Souza'} destination={'SettingScreen'} args={''}/>
            <ConfigTextButton iconName={'credit-card'} name={'CPF'} desc={'268.457.984-45'} destination={'SettingScreen'} args={''}/>
            <ConfigTextButton iconName={'mail'} name={'Endereço de Email'} desc={'nicholascampanelli@outlook.com'} destination={'SettingScreen'} args={''}/>
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
            <ConfigButton iconName={'file-text'} name={'Termos e Condições de Uso'} destination={'SettingScreen'} />
            <ConfigTextButton iconName={'package'} name={'Versão do Aplicativo'} desc={'5.12.38'} destination={'SettingScreen'} args={''}/>
            <ConfigTextButton iconName={'users'} name={'Criado por'} desc={'Nicholas Campanelli de Souza, Rafael da Silva Rodrigues'} destination={'SettingScreen'} args={''}/>
        </View>
    );

    const DataChange = () => (
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
                                onChange={e => {setEmail(e.target.value)}}
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
                                onChange={e => {setPass(e.target.value)}}
                            />
                    </View>
                </TouchableOpacity>
                <Text style={styles.listButtonDesc}>Por motivos de segurança, para confirmar a atualização, será enviado um email no endereço indicado.</Text>
            </View>
            <View style={gstyles.bottomSheetOptions}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={gstyles.bottomSheetOptionsTxt}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={gstyles.bottomSheetOptionsTxt}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

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
                <TouchableOpacity>
                    <Text style={gstyles.bottomSheetOptionsTxt}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const pages = {
        conta: <Conta/>,
        privacidade: <Privacidade/>,
        sobre: <Sobre/>,
        datachange: <DataChange/>,
        delete: <Delete/>
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