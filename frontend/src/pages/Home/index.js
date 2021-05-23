import React, {useContext, useEffect} from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, FlatList, ActivityIndicator, RefreshControl, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import gstyles, { mainAppColor, mainTextColor, lightTextColor } from '../../gstyles';
import BtnHome from '../Components/BtnHome';
import Carousel from '../Components/Carousel';
import { useNavigation } from '@react-navigation/native';
import ContextUser from '../../context/UserContext';
import { getCons, pegarDadosUser } from '../../middleware/userController';

export default function Home() {


    const { state, setUserInfo, consultas, setConsultas } = useContext(ContextUser)
    const navigation = useNavigation();


    useEffect(() => {
        pegarDadosUser().then(user => setUserInfo(user))
            .then(() => getCons().then(res => setConsultas(res)).catch(console.log))
    }, [])

    function ListaConsultas() {
        return (
            <View>
                <FlatList
                    data={consultas}
                    keyExtractor={item => item.uid}
                    renderItem={FlatCons}
                />
                <View style={{ ...styles.marcarBtn, position: 'relative', marginTop: "5%" }}>
                    <BtnHome nome={'Marcar Consulta'} pressFunction={() => navigation.navigate('Map', { modalOpen: true })} />
                </View>
            </View>
        )
    }
    const FlatCons = ({ item }) => {
        return (
            <View key={item.uid} >
                <TouchableOpacity style={gstyles.listTextButton} onPress={() => navigation.navigate('ConsultasM',item)}>
                    <View style={gstyles.listButtonIcon}>
                        <Feather size={24} name={'calendar'} />
                    </View>
                    <View style={gstyles.listButtonTxt}>
                        <View style={gstyles.listButtonExtra}>
                            <View>
                                <Text style={{ ...gstyles.listButtonTitle, width: "100%" }}>{item.espec ? item.espec : ""}</Text>
                                <Text style={gstyles.listButtonDesc}>{item.name ? item.name : ""}</Text>
                            </View>
                            <Text style={gstyles.listButtonDesc}>{item.data}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }


    return (
        <View style={{ ...gstyles.container, flex: 1 }}>
           <StatusBar 
           barStyle='dark-content'
           backgroundColor={mainAppColor}
           />

                <View style={styles.header}>
                    <Text style={styles.headerText}>Olá, {state.firstName ? state.firstName : '...'}!</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.headerButton}>
                        <View>
                            <Feather color={mainTextColor} size={26} name='user' />
                        </View>
                    </TouchableOpacity>
                </View>
                {consultas ? null :
                    <View style={styles.marcarBtn}>
                        <BtnHome nome={'Marcar Consulta'} pressFunction={() => navigation.navigate('Map')} />
                    </View>}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                >
                    <View style={styles.topButtons}>
                        <BtnHome nome={'Unidades de Saúde'} pressFunction={()=> navigation.navigate('Map')} />
                    </View>
                    <View style={styles.topButtons2}>
                        <BtnHome nome={'Vacinas'} pressFunction={()=>Alert.alert("AGORA",'Em construção!')} />
                    </View>
                    <View style={styles.carouselArea}>
                        <View style={styles.receitasTitle}>
                            <Text style={styles.receitasTitleText}>Receitas</Text>
                            <TouchableOpacity style={gstyles.seeMore} onPress={() => navigation.navigate('Receitas')}>
                                <Text style={gstyles.seeMoreTxt}>Ver todas</Text>
                                <Feather color={mainTextColor} size={16} style={gstyles.seeMoreIcon} name='chevron-right' />
                            </TouchableOpacity>
                        </View>
                        {state.remedios ? <Carousel items={[{
                            label: 'Paracetamol',
                            qtd: '2 capsulas por dia'
                        }, {
                            label: 'Ibuprofeno',
                            qtd: '2 capsulas por dia'
                        }, {
                            label: 'Dipirona',
                            qtd: '2 capsulas por dia'
                        }, {
                            label: 'Cloroquina',
                            qtd: '2 capsulas por dia'
                        }, {
                            label: 'Hidroxocloroquina',
                            qtd: '2 capsulas por dia'
                        }, {
                            label: 'Sei la',
                            qtd: '2 capsulas por dia'
                        }]} /> : <View style={{ justifyContent: 'center', alignItems: "center", marginTop: '10%' }} ><Text style={{ color: mainTextColor, fontSize: 20 }} >Não há remedios ou indicações! </Text></View>}
                    </View>
                    {consultas.length >= 1 ? <View style={styles.listArea}>
                        <View style={styles.sheetGrab}>
                            <View style={styles.sheetGrabInner} />
                        </View>
                        <View style={styles.listAreaHeader}>
                            <Text style={styles.listAreaTxt}>Consultas Marcadas</Text>
                            <TouchableOpacity style={gstyles.seeMore} onPress={() => navigation.navigate('Marcadas', { modalOpen: true })}>
                                <Text style={gstyles.seeMoreTxt}>Ver todas</Text>
                                <Feather color={mainTextColor} size={16} style={gstyles.seeMoreIcon} name='chevron-right' />
                            </TouchableOpacity>
                        </View>
                        <ListaConsultas />
                    </View>

                        : null}

                </ScrollView>
                {consultas.length >= 1 ?
                    null
                    :
                    <View style={{ zIndex: 2, bottom: '5%', width: "80%", height: 70, alignSelf: 'center' }}>
                        <BtnHome nome={'Marcar Consulta'} pressFunction={() => navigation.navigate('Map', { modalOpen: true })} />
                    </View>}

        </View>
    );
}