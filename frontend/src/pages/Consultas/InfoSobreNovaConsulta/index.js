import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Text, View, Image, Alert, Picker } from 'react-native';
import img from '../../../assets/ubslogo.png';
import styles from "./styles";
import { Feather } from '@expo/vector-icons';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import gstyles, { lightTextColor, mainAppColor, mainTextColor } from "../../../gstyles";
import { useNavigation } from '@react-navigation/native'
import { setCons, getMedicos } from '../../../middleware/UnidController';
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
    const [medicName, setMedicName] = useState(`${medics[0]}`)
    const [dia, setDia] = useState("12/01/2021")
    const [hora, setHora] = useState('10:10')
    const navigation = useNavigation()

    const { state, uni } = useContext(ContextUser)

    const InfoKeys = (props) => <Text style={{ fontWeight: 'bold', ...styles.InfoKeys }}>{props.name}</Text>
    const Info = (props) => <Text style={{ color: mainTextColor, fontSize: 18 }}>{props.info}</Text>

    function fazerConsulta() {

        if(state.sexo==undefined || state.sexo == null){ 
            Alert.alert('AGORA','Voce não pode escolher essa especialidade por conta do seu sexo!')
            return;
        }
        if(state.sexo == 'f' && especialidade == 'urologista'){
            Alert.alert('AGORA','Voce não pode escolher essa especialidade por conta do seu sexo!')
            return;
        }
        if(state.sexo == 'm' && especialidade == 'ginecologista'){
            Alert.alert('AGORA','Voce não pode escolher essa especialidade por conta do seu sexo!')
            return;
        }
 
        setCons(
            null,
            state.uid,
            idUnid,
            medicData.id,
            dia,
            hora,
            especialidade,
            medicData.name).then(a => {
                Alert.alert("AGORA", 'Consuta Marcada!')
                navigation.replace("Home")
            })
            .catch(err =>{
                Alert.alert('Não foi Possivel fazer a Consulta!',"Erro: "+err.message)
                navigation.replace("Home")
            })
    }

    useEffect(() => {
        getMedicos('COD_UNI', '==', uni).then(res => {
            if(res.length <= 1){
                setMedics([{
                    name:"Não disponivel",
                    id:123
                }])        
            }
            else{
                setMedics(res)
            }
        })
    }, [])

    function PickerPersonalizado() {

        return (
            <View PickerUnidade style={{ ...styles.picker, width: "48%",marginLeft:7}}>
                <Picker
                    selectedValue={medicName}
                    style={{ height: '100%', width: '100%', borderWidth: 5}}
                    onValueChange={(itemValue, itemIndex) => {
                     setMedicName(itemValue)
                    setMedicData({
                        name:itemValue,
                        id:medics[itemIndex].id
                    })
                    }}
                >
                    {medics.map((a, i) => {
                        return <Picker.Item key={i} label={`${medics.length <= 1? '':'Dr.'} ${medics[i].name}`} value={medics[i].name} />
                    })}
                </Picker>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View logo style={styles.containerHosp}>
                <Image style={{ width: '100%', height: '100%' }} source={img} resizeMode='contain' />
            </View>

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

                    <View style={styles.blocoInfo}>
                        <Info info={uni} />
                    </View>

                </View>


                <View picker style={{ ...styles.containerPicker, marginTop: "10%",width:'95%' }}>

                    <View PickerEspecialidades style={styles.picker}>
                        <Picker
                            selectedValue={especialidade}
                            style={{ height: '100%', width: '100%', }}
                            onValueChange={(itemValue, itemIndex) => setEspecialidade(itemValue)}
                        >
                            <Picker.Item label="Clinico Geral" value="CR" />
                            <Picker.Item label="Otorrino" value="otorrino" />
                            <Picker.Item label="Pediatra" value="pediatra" />
                            <Picker.Item label="Oftalmo" value="oftalmo" />
                            <Picker.Item label="Radiologia" value="radio" />
                        </Picker>
                    </View>

                    <PickerPersonalizado />

                </View>

                <View Picker style={styles.containerPicker}>

                    <View PickerHora style={{ ...styles.picker, width: "50%" }}>
                        <Picker
                            selectedValue={dia}
                            style={{ height: '100%', width: '100%', borderWidth: 5 }}
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
                            style={{ height: '100%', width: '100%', borderWidth: 5 }}
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

                        <TouchableOpacity onPress={() =>fazerConsulta()} >
                            <Text style={{ color: 'black' }}>MARCAR</Text>
                        </TouchableOpacity>

                    </View>

                </View>



            </ScrollView>
        </View>
    )
}