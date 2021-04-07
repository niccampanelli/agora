import React from 'react'
import { useState } from 'react';
import { Text, View, Image, Alert, Picker } from 'react-native';
import img from '../../../assets/ubslogo.png';
import styles from "./styles";
import { Feather } from '@expo/vector-icons';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import gstyles, { lightTextColor, mainAppColor, mainTextColor } from "../../../gstyles";
import { useNavigation } from '@react-navigation/native'



export default function ({ route }) {

    const { nome, local } = route.params
    const [especialidade, setEspecialidade] = useState("Clinico Geral")
    const [unidade, setUnidade] = useState("Unidade um")
    const [dia, setDia] = useState("12/01/2021")
    const [hora, setHora] = useState('10:10')
    const navigation = useNavigation()

    const InfoKeys = (props) => <Text style={{ fontWeight: 'bold', ...styles.InfoKeys }}>{props.name}</Text>
    const Info = (props) => <Text style={{ color: mainTextColor, fontSize:18 }}>{props.info}</Text>


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

            <ScrollView  horizontal={false} contentContainerStyle={{flex:1,paddingBottom:10,marginBottom:5}} >

                <View InfoHosp  >

                    <View style={styles.blocoInfo}>
                        <Info info={JSON.stringify(nome)} />
                    </View>

                    <View style={styles.blocoInfo}>
            
                        <Info info={JSON.stringify(local)} />
                    </View>

                    <View style={styles.blocoInfo}>
                        <Info info={"?????????????"} />
                    </View>

                </View>


                <View picker style={{ ...styles.containerPicker, marginTop: "10%", }}>

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

                <View Picker style={styles.containerPicker}>

                    <View PickerHora style={{ ...styles.picker, width: "50%" }}>
                        <Picker
                            selectedValue={dia}
                            style={{ height: '100%', width: '100%', borderWidth: 5 }}
                            onValueChange={(itemValue, itemIndex) => setDia(itemValue)}
                        >
                            <Picker.Item label='13/01/2002' value='1' />
                            <Picker.Item label='14/02/1001' value='2' />
                            <Picker.Item label='15/06/2005' value='3' />
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
                            style={{ height: 120, borderColor: mainAppColor, borderWidth: 2, padding: 15, borderRadius: 10 }}
                            multiline={true}
                            textAlign='left'
                            textAlignVertical='top'
                            placeholder='Aperta em Marcar ai pls.'
                        />

                    </View>

                </View>

                <View Btnsb style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: '8%', marginTop: '5%' }}>

                    <View style={{ ...styles.btn, backgroundColor: 'red' }}>

                        <TouchableOpacity onPress={()=> navigation.replace("Home") } >
                            <Text style={{ color: 'white' }}>CANCELAR</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.btn}>

                        <TouchableOpacity onPress={() => Alert.alert("esp"+especialidade+'uni'+unidade+'dia'+dia+"hora"+hora)}>
                            <Text style={{ color: 'black' }}>MARCAR</Text>
                        </TouchableOpacity>

                    </View>

                </View>



            </ScrollView>
        </View>
    )
}