import React, { useRef, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './styles';
import gstyles from '../../../gstyles';
import { useNavigation, useRoute } from '@react-navigation/native';
import ConfigButton from '../Components/ConfigButton';
import ConfigTextButton from '../Components/ConfigTextButton';
import BottomSheet from '../../Components/BottomSheet';

export default function Home(){

    const [isEditingInfo, setInfoEditing] = useState(false);

    const [emailValue, setEmail] = useState('nicholascampanelli@outlook.com');
    const [passValue, setPass] = useState('************');

    const emailRef = useRef();
    const passRef = useRef();

    const [isBottomSheetEnabled, setBottomSheetEnabled] = useState(false);
    const [bottomSheetTitle, setBottomSheetTitle] = useState('');
    const [bottomSheetPage, setBottomSheetPage] = useState('');
    const route = useRoute();
    const navigation = useNavigation();

    const title = route.params.title;
    const pageName = route.params.page;

    const showBottomSheet = (title, page) => {
        setBottomSheetEnabled(true);
        setBottomSheetTitle(title);
        setBottomSheetPage(page);
    }

    const Conta = () => (
        <ScrollView style={styles.subContainer}>
            <ConfigTextButton iconName={'user'} name={'Nome'} desc={'Nicholas Campanelli de Souza'} destination={''} args={''}/>
            <ConfigTextButton iconName={'credit-card'} name={'CPF'} desc={'268.457.984-45'} destination={''} args={''}/>
            { isEditingInfo ?
                <View>
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
                </View>
            :
                <View>
                    <ConfigTextButton iconName={'mail'} name={'Endereço de Email'} desc={'nicholascampanelli@outlook.com'} destination={''} args={''}/>
                    <ConfigTextButton iconName={'key'} name={'Senha'} desc={'************'} destination={''} args={''}/>
                </View>
            }
            <TouchableOpacity style={styles.listButtonRed} onPress={() => showBottomSheet('Tem certeza?', 'confDelete')}>
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
            <ConfigButton iconName={'file-text'} name={'Uso de dados'} destination={''} />
        </View>
    );

    const Sobre = () => (
        <View style={styles.subContainer}>
            <ConfigButton iconName={'file-text'} name={'Termos e Condições de Uso'} destination={''} />
            <ConfigTextButton iconName={'package'} name={'Versão do Aplicativo'} desc={'5.12.38'} destination={''} args={''}/>
            <ConfigTextButton iconName={'users'} name={'Criado por'} desc={'Nicholas Campanelli de Souza, Rafael da Silva Rodrigues'} destination={''} args={''}/>
        </View>
    ); 

    const Delete = () => (
        <View style={{height: '100%'}}>
            <Text style={styles.listButtonDesc}>A exclusão do cadastro na plataforma "AGORA" apaga todos os dados do usuário no banco de dados.</Text>
            <Text style={styles.listButtonDesc}>Esta exclusão é permanente e não pode ser desfeita.</Text>
            <View style={gstyles.sheetBottomOptions}>
                <TouchableOpacity onPress={() => setBottomSheetEnabled(false)}>
                    <Text style={gstyles.sheetBottomOptionsTxt}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={gstyles.sheetBottomOptionsTxt}>Excluir Dados</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const pages = {
        conta: <Conta/>,
        privacidade: <Privacidade/>,
        sobre: <Sobre/>,
        confDelete: <Delete/>
    };

    return(
        <View style={gstyles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backbutton}><Feather color={'#bbb'} size={40} name={"chevron-left"}/></TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{title}</Text>
                <TouchableOpacity style={styles.infoEdit} onPress={() => setInfoEditing(!isEditingInfo)}>
                    {isEditingInfo ? <Feather name={'x'} color={'#888'} size={30}/> : <Feather name={'edit'} color={'#888'} size={30}/>}
                </TouchableOpacity>
            </View>
            {pages[pageName]}
            {isBottomSheetEnabled ? 
                <BottomSheet>
                    <Text style={gstyles.sheetTitle}>{bottomSheetTitle}</Text>
                    {pages[bottomSheetPage]}
                </BottomSheet>
            : <Text/>}
        </View>
    );
}