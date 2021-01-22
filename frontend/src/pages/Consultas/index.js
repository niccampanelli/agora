import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Alert, TouchableHighlight, Button, StatusBar, FlatList, Image, Modal } from 'react-native';
import styles from './styles';
import gstyles from '../../gstyles';
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
                <View  HeaderModal style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <TouchableOpacity onPress={()=>setVisivel(!visivel)}>
                        <Feather color={'#bbb'} size={60} name={"chevron-down"} />
                    </TouchableOpacity>

                    <View style={{ alignItems: 'flex-start', width: "70%", justifyContent: 'center', }}>
                        <Text style={{ fontSize: 28, fontWeight: 'bold', }}>Nova Consulta</Text>
                    </View>

                </View>
                <ModalNovaConsulta visivel={useState(visivel)}/>
            </Modal>
        )
    }


    return (
        <View style={gstyles.container}>
            <View style={styles.header}>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={'#fafafa'}
                />

                <ModalAdd />

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backbutton}><Feather color={'#bbb'} size={40} name={"chevron-left"} /></TouchableOpacity>
                    <Text style={styles.headerTitle}>Consultas Marcadas</Text>
                </View>
            </View>

            <View>
                <FlatList
                    data={consultas}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <Marcadas item={item} />} />
            </View>

            <View style={styles.btnAdd}>
                <TouchableOpacity
                    onPress={() => setVisivel(!visivel)}>
                    <Image
                        source={require('./img/mais.png')}
                        resizeMode='contain' />
                </TouchableOpacity>
            </View>

        </View>
    );
}