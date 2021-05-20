import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Text, View, Image, Alert, Picker, Modal, TouchableOpacity } from 'react-native';
import img from '../../../assets/ubslogo.png';
import styles from "./styles";
import { Feather } from '@expo/vector-icons';
import { FlatList, ScrollView, TextInput, } from 'react-native-gesture-handler';
import gstyles, { lightTextColor, mainAppColor, mainTextColor } from "../../../gstyles";
import { useNavigation } from '@react-navigation/native'
import { setCons, getMedicos, getEspecs, getMedicEspecs } from '../../../middleware/UnidController';
import ContextUser from '../../../context/UserContext';




export default function ({ route }) {
    

    const { name, endereco, uidUnid } = route.params
    const idUnid = JSON.stringify(uidUnid)
    const [especialidade, setEspecialidade] = useState("Clinico Geral")
    //medics é um array de nomes para renderizar no componente picker
    const [medics, setMedics] = useState([])
    //medicData é o obj tem os dados para marcar a consulta
    const [medicData, setMedicData] = useState({})
    //renderizar o nome sem entrar em conflito com o Picker
    const [medicName, setMedicName] = useState('Medic')
    //
    const [especialidadeSelected, setEspecialidadeSelected] = useState([])
    const [medicEspec, setMedicEspec] = useState([])
    const [medicEspecFilter, setMedicEspecFilter] = useState([])

    const [dia, setDia] = useState("12/01/2021")
    const [hora, setHora] = useState('10:10')
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);

    const { state, uni } = useContext(ContextUser)

    const InfoKeys = (props) => <Text style={{ fontWeight: 'bold', ...styles.InfoKeys }}>{props.name}</Text>
    const Info = (props) => <Text style={{ color: mainTextColor, fontSize: 18 }}>{props.info}</Text>

    function fazerConsulta(id,name) {

        if (state.sexo === undefined || state.sexo === null) {
            Alert.alert('AGORA', 'Voce não pode escolher essa especialidade por conta do seu sexo não informado!')
            return;
        }
        if (state.sexo == 'f' && especialidade == 'urologista') {
            Alert.alert('AGORA', 'Voce não pode escolher essa especialidade por conta do seu sexo!')
            return;
        }
        if (state.sexo == 'm' && especialidade == 'ginecologista') {
            Alert.alert('AGORA', 'Voce não pode escolher essa especialidade por conta do seu sexo!')
            return;
        }

        setCons(
            null,
            state.uid,
            idUnid,
            id,
            dia,
            hora,
            especialidade,
            name).then(a => {
                Alert.alert("AGORA", 'Consuta Marcada!')
                navigation.replace("Home")
            })
            .catch(err => {
                Alert.alert('Não foi Possivel fazer a Consulta!', "Erro: " + err.message)
                navigation.replace("Home")
            })
    }

    useEffect(() => {
        getMedicos('COD_UNI', '==', uni).then(res => {
            if (res.length <= 0) {
                setMedics([{
                    name: "Não disponivel",
                    id: 123
                }])
            }
            else {
                setMedics(res)
            }
        })
    }, [])

    useEffect(() => {
        getEspecs('COD_UNI', '==', uni).then(res => {
            setEspecialidadeSelected(res)
        })
    }, [])

    useEffect(() => {
        getMedicEspecs('COD_UNI', '==', uni, especialidade)
            .then(res => {
                setMedicEspec(res)
            })
    }, [])
    function continuar(conId) {
        Alert.alert("AGORA",
        `Deseja continuar com essa consulta?
        ${especialidade} com ${medicData.name} 
         no dia ${dia} as ${hora}`, [
            {
                text: "Não",
                style: "cancel",
            },
            {
                text: "Sim",
                onPress: () => {

                    fazerConsulta()
                },
            }
        ]);
    }

    function ModalMedicos() {
        let data = []
        for (let i = 0; i < medicEspec.length; i++) {
            if (medicEspec[i].espec === especialidade) {
                data.push({ name: medicEspec[i].name, id: medicEspec[i].id })
            }
        }
        function Lista({ item }) {
            return (
                <TouchableOpacity
                    style={styles.btnModalMedico}
                    onPress={() => {
                        setMedicData({ name: item.name, id: item.id })
                        setModalVisible(!modalVisible)
                        fazerConsulta(item.id,item.name)
                        

                    }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }} >
                            <Feather size={34} name={'user'} />
                            <View style={{ marginLeft: '10%' }}>
                                <Text style={{ fontSize: 16 }} >{`Dr.` + item.name}</Text>
                                <Text style={{ fontSize: 14, color: lightTextColor }} >{especialidade}</Text>
                            </View>
                        </View>
                        <Feather size={34} name={'arrow-right'} color={mainAppColor} />
                    </View>

                </TouchableOpacity>
            )
        }
        return (
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalMedicos}  >
                    <View style={{ marginBottom: '5%' }}>
                        <Text style={gstyles.headerTitle} >Médicos Disponiveis</Text>
                        <Text style={[gstyles.listButtonDesc, { marginTop: '5%' }]}>Toque em um medico de sua preferencia, ou toque em SEM PREFERENCIA.</Text>
                    </View>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.id.toString()}
                        renderItem={Lista}
                    />
                    <TouchableOpacity

                        onPress={() => {
                            setModalVisible(false)
                            console.log(modalVisible)
                        }} >
                        <Feather size={40} name={"chevron-left"} />
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

    return (
        <View style={styles.container}>
            <View logo style={styles.containerHosp}>
                <Image style={{ width: '100%', height: '100%' }} source={img} resizeMode='contain' />
            </View>
            <ModalMedicos />
            <View style={{ zIndex: 1, position: 'absolute', top: "5%" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Feather color={lightTextColor} size={45} name={"chevron-left"} />
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={false} contentContainerStyle={{ flex: 1, paddingBottom: 10, marginBottom: 5 }} >

                <View InfoHosp >

                    <View style={styles.blocoInfo}>
                        <Info info={JSON.stringify(name)} />
                    </View>

                    <View style={styles.blocoInfo}>

                        <Info info={JSON.stringify(endereco)} />
                    </View>
                </View>

                <View style={{ width: '100%' }} >
                    <View style={{ borderWidth: 1, borderRadius: 8, borderColor: lightTextColor, marginBottom: 10 }} >
                        <Picker
                            selectedValue={especialidade}
                            style={{ width: '100%' }}
                            onValueChange={(itemValue, itemIndex) => {
                                setEspecialidade(itemValue)
                            }}
                        >
                            {especialidadeSelected.map((a, i) => {
                                return <Picker.Item key={i} label={`${especialidadeSelected[i]}`} value={especialidadeSelected[i]} />
                            })}

                        </Picker>
                    </View>
                </View>

                <View Picker style={styles.containerPicker}>

                    <View PickerHora style={{ ...styles.picker, width: "50%" }}>
                        <Picker
                            selectedValue={dia}
                            style={{ height: '100%', width: '100%' }}
                            onValueChange={(itemValue, itemIndex) => setDia(itemValue)}
                        >
                            <Picker.Item label='13/01/2021' value='13/01/2021' />
                            <Picker.Item label='14/02/2021' value='14/02/2021' />
                            <Picker.Item label='15/06/2021' value='15/06/2021' />
                        </Picker>
                    </View>

                    <View PickerHora style={{ ...styles.picker, width: "35%" }}>
                        <Picker
                            selectedValue={hora}
                            style={{ height: '100%', width: '100%' }}
                            onValueChange={(itemValue, itemIndex) => setHora(itemValue)}
                        >
                            <Picker.Item label='13:00' value='13:00' />
                            <Picker.Item label='13:30' value='13:30' />
                            <Picker.Item label='14:00' value='14:00' />
                        </Picker>
                    </View>

                </View>

                <View Observaçoes>

                    <Text style={{ ...gstyles.listButtonTitle, marginBottom: '4%' }}>Observações:</Text>

                    <View>

                        <TextInput
                            style={{ height: 120, borderColor: lightTextColor, borderWidth: 2, padding: 15, borderRadius: 10 }}
                            multiline={true}
                            textAlign='left'
                            textAlignVertical='top'
                            placeholder='Aperta em Marcar ai pls.'
                        />

                    </View>

                </View>

                <View Btnsb style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: '8%', marginTop: '5%' }}>

                    <View style={{ ...styles.btn, backgroundColor: 'red' }}>

                        <TouchableOpacity onPress={() => navigation.replace("Home")} >
                            <Text style={{ color: 'white' }}>CANCELAR</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.btn}>

                        <TouchableOpacity onPress={() => teste()} >
                            <Text style={{ color: 'black' }}>MARCAR</Text>
                        </TouchableOpacity>

                    </View>

                </View>



            </ScrollView>
        </View>
    )
}