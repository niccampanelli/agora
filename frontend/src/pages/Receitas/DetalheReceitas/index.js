import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
import gstyles, {mainAppColor, mainTextColor, lightTextColor} from '../../../gstyles';
import { useNavigation, useRoute } from '@react-navigation/native';
import ConfigTextButton from '../../Components/ConfigTextButton';

export default function DetalheReceitas(){

    const navigation = useNavigation();
    const route = useRoute();

    const [isModalVisible, setModalVisible] = useState(false);
    const [modalPage, setModalPage] = useState();

    const title = route.params.title;

    const Help = () => (
        <View style={gstyles.bottomSheet}>
            <View style={gstyles.bottomSheetInfo}>
                <Text style={gstyles.bottomSheetTitle}>Precisa de Ajuda?</Text>
                <Text style={gstyles.listButtonDesc}>Toque em uma categoria abaixo para obter ajuda. Toque em "Falar com o Médico" para abrir um 'chat' com o profissional responsável.</Text>
            </View>
            <View style={gstyles.bottomSheetPage}>
                <ConfigTextButton iconName={'type'} name={'Ler a Receita'} desc={'Ajuda para entender a receita'}/>
                <ConfigTextButton iconName={'map-pin'} name={'Medicamento'} desc={'Onde encontrar o medicamento'}/>
                <ConfigTextButton iconName={'clock'} name={'Validade da Receita'} desc={'Duração da validade da receita'}/>
                <ConfigTextButton iconName={'message-square'} name={'Falar com o Médico'} desc={'Entrar em contato com o médico'}/>
            </View>
            <View style={gstyles.bottomSheetOptions}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={gstyles.bottomSheetOptionsTxt}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const pages = {
        help: <Help/>,
    };

    return(
        <View style={gstyles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backbutton}><Feather color={lightTextColor} size={40} name={"chevron-left"}/></TouchableOpacity>
                <View style={styles.headerWithOption}>
                    <View>
                        <Text style={styles.headerTitle}>{title}</Text>
                        <Text style={styles.headerSubTitle}>Código: 146589</Text>
                    </View>
                    <TouchableOpacity style={styles.infoEdit} onPress={() => {setModalVisible(true); setModalPage('help')}}>
                        <Feather name={'help-circle'} color={lightTextColor} size={30}/>
                    </TouchableOpacity>
                </View>
            <View style={styles.subContainer}>
                <View style={styles.section1}>
                    <View style={styles.adress}>
                        <Text style={styles.infoTitle}>
                            Hospital Regional de São Paulo
                        </Text>
                        <Text style={styles.infoSubTitle}>
                            Rua Francisco Schmidit, 1520 - Morumbi.
                        </Text>
                    </View>
                    <Text style={styles.infoTitle}>
                        Observações de Uso:
                    </Text>
                    <Text style={styles.infoSubTitle}>
                        Uso Oral: Tomar 1 'um' comprimido a cada 12 'doze' horas por 7 'sete', dias.
                    </Text>
                </View>
                <View style={styles.section2}>
                    <Text style={styles.infoTitle}>
                        16/09/2020 ás 15:36
                    </Text>
                    <Text style={styles.infoTitle}>
                        Josevaldo dos Santos Oliveira
                    </Text>
                    <Text style={styles.infoSubTitle}>
                        CRM: 35475
                    </Text>
                </View>
            </View>
            
            {isModalVisible ? <View style={gstyles.bottomSheetBackground}/> : <Text/>}
            <Modal transparent animationType={'slide'} visible={isModalVisible}>
                {pages[modalPage]}
            </Modal>

        </View>
    );
}