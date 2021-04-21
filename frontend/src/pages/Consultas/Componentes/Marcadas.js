import React, { useContext, useState } from 'react'
import { Text, View, TouchableOpacity, Modal } from 'react-native'
import { Feather } from '@expo/vector-icons';
import gstyles, { lightTextColor } from '../../../gstyles';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/core';
import ContextUser from '../../../context/UserContext';

export default function (props) {

    const route = useRoute();
    const navigation = useNavigation()
    const { consultas } = useContext(ContextUser)
    const modalOpenParam = route.params.modalOpen == undefined ? false : route.params.modalOpen;
    const [visivel, setVisivel] = useState(modalOpenParam);
    function flat({ item }) {
        return (
            <TouchableOpacity style={{ ...gstyles.listTextButton, marginHorizontal: '5%' }} onPress={() => {
                setVisivel(!visivel)
                navigation.navigate('ConsultasM')}}>
                <View style={gstyles.listButtonIcon}>
                    <Feather size={24} name={'calendar'} />
                </View>
                <View style={gstyles.listButtonTxt}>
                    <View style={gstyles.listButtonExtra}>
                        <Text style={gstyles.listButtonTitle}>{item.espec ? item.espec : '...'}</Text>
                        <Text style={gstyles.listButtonDesc}>{item.data ? item.data : 'Um dia ai...'}</Text>
                    </View>
                    <Text style={gstyles.listButtonDesc}>{item.nomeMedico ? item.nomeMedico : 'Dr. Rafael'}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visivel}
            onRequestClose={() => {
                setVisivel(!visivel)
            }}
            style={styles.modalCons}
        >
            <TouchableOpacity style={styles.closeButton} onPress={() => {
                setVisivel(!visivel)
                navigation.replace("Home")
            }}>
                <Feather color={lightTextColor} size={40} name={"chevron-down"} />
            </TouchableOpacity>
            <View style={styles.header}>
                <View style={styles.headerCons} >
                    <Text style={styles.headerConsText} >Consultas Marcadas</Text>
                </View>

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginStart: '10%' }} >
                <Text style={styles.headerConsSubText} >Essas são suas consultas ativas.</Text>
                <Text style={styles.headerConsSubText} >Toque em uma consultas para ter acesso a informações..</Text>
            </View>
            <FlatList
                style={{ marginTop: '10%' }}
                data={consultas}
                keyExtractor={item => item.uid}
                renderItem={flat}
            />
        </Modal>
    )
}