import React, { useContext, useState } from 'react'
import { Text, View, TouchableOpacity, Modal,Animated, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons';
import gstyles, { lightTextColor } from '../../../gstyles';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/core';
import ContextUser from '../../../context/UserContext';
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import {apagarConsulta} from '../../../middleware/userController'


export default function (props) {

    const route = useRoute();
    const navigation = useNavigation()
    const { consultas } = useContext(ContextUser)
    const modalOpenParam = route.params.modalOpen == undefined ? false : route.params.modalOpen;
    const [visivel, setVisivel] = useState(modalOpenParam);

    function flat({ item }) {
        function removerCon(conId) {
            Alert.alert("Remover", `Deseja cancelar essa consulta?`, [
              {
                text: "Não",
                style: "cancel",
              },
              {
                text: "Sim",
                onPress: async () => {
                    apagarConsulta(conId)
                },
              }
            ]);
          }
        


        return (
            <Swipeable
                overshootRight={false}
                renderRightActions={() => (
                    <Animated.View>
                        <View>
                            <RectButton style={styles.buttonRemove} onPress={()=>removerCon(item.uid)}>
                                <Feather name="trash" size={32} color={'#fff'} />
                            </RectButton>
                        </View>
                    </Animated.View>
                )}
            >
                <View style={{ ...gstyles.listTextButton, marginHorizontal: '5%',borderBottomWidth:1,borderColor:lightTextColor}} onPress={() => {
                    setVisivel(!visivel)
                    navigation.navigate('ConsultasM')
                }}>
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
                </View>
            </Swipeable>
        )
    }
    function infoCons() {
       return Alert.alert('AGORA','Para cancelar uma consulta deslize alguma consulta para a esquerda.')
    }
    function verCon() {
        setVisivel(!visivel)
        navigation.replace("Home")
    }
    function teste() {
        const t = new Date().toLocaleTimeString().
        console.log(t)
    }

    return (
        <View style={styles.modalCons}>
            <TouchableOpacity style={styles.closeButton} onPress={() =>verCon()}>
                <Feather color={lightTextColor} size={40} name={"chevron-down"} />
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.closeButton,top:'90%',zIndex:9}} onPress={()=>teste()}>
                <Feather color={lightTextColor} size={30} name={"info"} />
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
        </View>
    )
}