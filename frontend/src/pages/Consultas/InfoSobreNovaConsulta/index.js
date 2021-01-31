import React from 'react'
import { useState } from 'react';
import { Text, View, Image, Picker, Alert } from 'react-native'
import img from '../../../assets/ubs-unidade-basica-de-saude-logo-5FA6837F13-seeklogo.com.png';
import styles from "./styles";
import { Feather } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import gstyles, { lightTextColor, mainAppColor, mainTextColor } from "../../../gstyles";
import { useNavigation } from '@react-navigation/native'



export default function ({ route }) {

    const { nome, local } = route.params
    const [valorSelecionadoEspecialidade, setValorSelecionadoEspecialidade] = useState("Clinico Geral")
    const [unidade, setUnidade] = useState("Unidade um")
    const [dia, setDia] = useState(["12/01/2021", "13/01/2021", "14/01/2021"])
    const [hora, setHora] = useState(["12:00", "12:30", "13:00"])
    const navigation = useNavigation()

    const InfoKeys = (props) => <Text style={{ fontWeight: 'bold', ...styles.InfoKeys }}>{props.name}</Text>
    const Info = (props) => <Text style={{ color: mainTextColor }}>{props.info}</Text>


    return (
        <View style={styles.container}>

            <View logo style={styles.containerHosp}>
                <Image style={{ width: '100%', height: '100%' }} source={img} resizeMode='contain' />
            </View>

            <View style={{ zIndex: 1, position: 'absolute' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Feather color={lightTextColor} size={40} name={"chevron-left"} />
                </TouchableOpacity>
            </View>

            <View InfoHosp>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Nome:  '} />
                    <Info info={JSON.stringify(nome).toString()} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Local:  '} />
                    <Info info={JSON.stringify(local).toString()} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Cnpj:  '} />
                    <Info info={"?????????????"} />
                </View>

            </View>

            <View style={{ ...styles.containerPicker, marginTop: "10%" }}>

                <View PickerEspecialidades style={styles.picker}>
                    <Picker
                        selectedValue={valorSelecionadoEspecialidade}
                        style={{ height: '100%', width: '100%' }}
                        onValueChange={(itemValue, itemIndex) => setValorSelecionadoEspecialidade(itemValue)}
                    >
                        <Picker.Item label="Clinico Geral" value="CR" />
                        <Picker.Item label="Otorrino" value="otorrino" />
                        <Picker.Item label="Pediatra" value="pediatra" />
                        <Picker.Item label="Oftalmo" value="oftalmo" />
                        <Picker.Item label="Radiologia" value="radio" />
                    </Picker>
                </View>

                <View PickerUnidade style={{ ...styles.picker, width: "42%" }}>
                    <Picker
                        selectedValue={unidade}
                        style={{ height: '100%', width: '100%', borderWidth: 5 }}
                        onValueChange={(itemValue, itemIndex) => setUnidade(itemValue)}
                    >
                        <Picker.Item label="Unidade 1" value="1" />
                        <Picker.Item label="Unidade 2" value="2" />
                        <Picker.Item label="Unidade 3" value="3" />
                    </Picker>
                </View>

            </View>

            <View style={styles.containerPicker}>

                <View PickerHora style={{ ...styles.picker, width: "50%" }}>
                    <Picker
                        selectedValue={hora}
                        style={{ height: '100%', width: '100%', borderWidth: 5 }}
                        onValueChange={(itemValue, itemIndex) => setHora(itemIndex)}
                    >
                        <Picker.Item label={dia[0]} value={dia[0]} />
                        <Picker.Item label={dia[1]} value={dia[1]} />
                        <Picker.Item label={dia[2]} value={dia[2]} />
                    </Picker>
                </View>

                <View PickerHora style={{ ...styles.picker, width: "35%" }}>
                    <Picker
                        selectedValue={hora}
                        style={{ height: '100%', width: '100%', borderWidth: 5 }}
                        onValueChange={(itemValue, itemIndex) => setHora(itemIndex)}
                    >
                        <Picker.Item label={hora[0]} value={hora[0]} />
                        <Picker.Item label={hora[1]} value={hora[1]} />
                        <Picker.Item label={hora[2]} value={hora[2]} />
                    </Picker>
                </View>

            </View>

            <View Observaçoes>

                <Text style={{...gstyles.listButtonTitle,marginBottom:'4%'}}>Observações:</Text>

                <View>

                    <TextInput
                        style={{ height: 160, borderColor:mainAppColor, borderWidth: 2,padding:15,borderRadius:10 }}
                        multiline={true}
                        textAlign='left'
                        textAlignVertical='top'
                        placeholder='Aperta em Marcar ai pls.'
                    />

                </View>

            </View>

            <View Btnsb style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: '8%', marginTop: '5%' }}>

                <View style={{ ...styles.btn, backgroundColor: 'red' }}>

                    <TouchableOpacity>
                        <Text style={{ color: 'white' }}>CANCELAR</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.btn}>

                    <TouchableOpacity  onPress={()=>Alert.alert("As cores das bordas mudam no mainappColor!")}>
                        <Text style={{ color: 'black' }}>MARCAR</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}