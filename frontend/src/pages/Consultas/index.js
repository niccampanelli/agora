import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Alert, TouchableHighlight, Button, StatusBar, FlatList, Image, Modal } from 'react-native';
import styles from './styles';
import gstyles, { lightTextColor, mainTextColor } from '../../gstyles';
import { useNavigation } from '@react-navigation/native';
import consultas from '../Consultas/Dados';
import Marcadas from './Componentes/Marcadas'
import ModalNovaConsulta from './Componentes/ModalNovaConsulta'

export default function Consultas() {

    const navigation = useNavigation();
    const [visivel, setVisivel] = useState(false)


    function ModalAdd(props,{route}) {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={visivel}
                onRequestClose={() => {
                    setVisivel(!visivel)
                  }}
            >
                <View HeaderModal style={styles.headerModal}>
                    <TouchableOpacity style={styles.closeButton} onPress={()=>setVisivel(!visivel)}>
                        <Feather color={lightTextColor} size={40} name={"chevron-down"} />
                    </TouchableOpacity>
                    <Text style={styles.headerModalTitle}>Nova Consulta</Text>
                </View>
                <Text style={styles.headerModalSubitle}>Primeiro, escolha abaixo uma unidade de saúde:</Text>
                <ModalNovaConsulta visivel={useState(visivel)}/>
            </Modal>
        )
    }


    return (
        <View style={gstyles.container}>
            <StatusBar
                barStyle='dark-content'
                backgroundColor={'#fafafa'}
            />
            <ModalAdd />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backbutton}><Feather color={lightTextColor} size={40} name={"chevron-left"}/></TouchableOpacity>
                <Text style={styles.headerTitle}>Consultas</Text>
                <Text style={styles.headerSubTitle}>Todas suas consultas com um especialista marcadas. Toque em uma consulta para ver mais detalhes sobre ela</Text>
            </View>
                <FlatList
                    style={styles.dataList}
                    contentContainerStyle={{paddingBottom: 120}}
                    nestedScrollEnabled
                    data={consultas}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <Marcadas item={item} />} 
                />
            <View style={styles.btnAdd}>
                <TouchableOpacity onPress={() => setVisivel(!visivel)}>
                    <Feather color={mainTextColor} name={'plus'} size={52}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}