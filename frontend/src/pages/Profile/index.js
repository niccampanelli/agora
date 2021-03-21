import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import gstyles, {mainAppColor, mainTextColor, lightTextColor} from '../../gstyles';
import { useNavigation } from '@react-navigation/native';
import ConfigButton from '../Components/ConfigButton';
import { logOut } from '../../middleware/userController';

export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={gstyles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backbutton}><Feather color={lightTextColor} size={40} name={"chevron-left"}/></TouchableOpacity>
                <Text style={styles.headerTitle}>Configurações</Text>
                <Text style={styles.headerSubTitle}>Aqui você pode definir suas preferências em relação ao aplicativo. Toque em uma categoria</Text>
            </View>
            <View style={styles.subContainer}>
                <ConfigButton iconName={'user'} name={'Dados da Conta'} destination={'SettingScreen'} args={{title: 'Dados da Conta', subTitle: 'Seus dados de cadastro na plataforma. Toque no lapis acima se desejar editar alguma informação.', page: 'conta'}} />
                <ConfigButton iconName={'settings'} name={'Configurações do Aplicativo'} destination={'SettingScreen'} args={{title: 'Configurações do Aplicativo', subTitle: 'Configurações relacionadas ao aplicativo e suas funções.', page: 'appconf'}} />
                <ConfigButton iconName={'lock'} name={'Privacidade'} destination={'SettingScreen'} args={{title: 'Privacidade', subTitle: 'Informações sobre a privacidade dos seus dados na plataforma.', page: 'privacidade'}} />
                <ConfigButton iconName={'info'} name={'Sobre'} destination={'SettingScreen'} args={{title: 'Sobre', subTitle: 'Informações sobre o aplicativo.', page: 'sobre'}} />
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>logOut().then(navigation.replace('Login'))} >
                    <Text>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}