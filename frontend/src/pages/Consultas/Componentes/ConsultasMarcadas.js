
import React from 'react'
import { Text, View, TouchableOpacity, Fea, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from './styles';



export default function Marcadas({ route, navigation }) {
    const { nome, id } = route.params;

    const InfoKeys = (props) => <Text style={{fontWeight:'bold'}}>{props.name}</Text>

    const Info = (props) => <Text>{props.info}</Text>

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>

                <StatusBar
                    barStyle='dark-content' />

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}
                ><Feather color={'#bbb'} size={40} name={"chevron-left"} />
                </TouchableOpacity>

                <View style={styles.headerTexto}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', }}>Informações</Text>
                </View>

            </View>
            <View style={styles.info}>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={"Especialidade:  "} />
                    <Info info={JSON.stringify(nome)} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Dia Marcado:  '} />
                    <Info info={'12/12/1111'} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Hora Prevista:  '} />
                    <Info info={'12:34'} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Local:  '} />
                    <Info info={'Rua MiauMiau, 123 São Paulo-SP'} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Hospital/Clinica:  '} />
                    <Info info={'Xesquedele no desque saude'} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Tipo:  '} />
                    <Info info={'Consulta '} />
                </View>

                <View style={styles.blocoInfo}>
                    <InfoKeys name={'Nome:  '} />
                    <Info info={'Doutor Rafael'} />
                </View>
            </View>
        </View>
    )
}
/*
<View style={styles.blocoInfo}>
</View>

<InfoKeys name={''}/>
<Info info={''}/>
  */