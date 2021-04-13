import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, FlatList, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import gstyles, { mainAppColor, mainTextColor, lightTextColor } from '../../gstyles';
import BtnHome from '../Components/BtnHome';
import Carousel from '../Components/Carousel';
import consultasRaw from '../Consultas/Dados'
import { useNavigation } from '@react-navigation/native';
import ContextUser from '../../context/UserContext';
import { getConsWithQuery, pegarDadosUser } from '../../middleware/userController';


export default function Home() {


    const { state, setUserInfo, consultas } = useContext(ContextUser)
    const navigation = useNavigation();

    useEffect(() => {
        pegarDadosUser().then(user => setUserInfo(user))
    }, [])

    function ListaConsultas() {
        return (
            <FlatList
            data={consultas}
            keyExtractor={item => item.uid}
            renderItem={FlatCons}
            />
        )
    }
    const FlatCons = ({ item }) => {
        return (
            <View key={item.uid} >
                {consultas ? <TouchableOpacity style={gstyles.listTextButton} onPress={() => navigation.navigate('Consultas Marcadas', { nome: consulta.especialidade })}>
                    <View style={gstyles.listButtonIcon}>
                        <Feather size={24} name={'calendar'} />
                    </View>
                    <View style={gstyles.listButtonTxt}>
                        <View style={gstyles.listButtonExtra}>
                            <Text style={gstyles.listButtonTitle}>{item.hora}</Text>
                            <Text style={gstyles.listButtonDesc}>{item.data}</Text>
                        </View>
                    </View>
                </TouchableOpacity> : null}
            </View>
        )
    }


    
    return (
        <View style={gstyles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Olá, {state.firstName}!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.headerButton}>
                    <View>
                        <Feather color={mainTextColor} size={26} name='user' />
                    </View>
                </TouchableOpacity>
            </View>
            {consultas ? null :
                <View style={styles.marcarBtn}>
                    <BtnHome nome={'Marcar Consulta'} pressFunction={() => navigation.navigate('Map', { modalOpen: true })} />
                </View>}
            <ScrollView
                showsVerticalScrollIndicator={false}
                pagingEnabled
                horizontal={false}
            >
                <View style={styles.topButtons}>
                    <BtnHome nome={'Unidades de Saúde'} />
                </View>
                <View style={styles.topButtons2}>
                    <BtnHome nome={'Vacinas'} />
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
                {consultas ? <View style={styles.listArea}>
                    <View style={styles.sheetGrab}>
                        <View style={styles.sheetGrabInner} />
                    </View>
                    <View style={styles.listAreaHeader}>
                        <Text style={styles.listAreaTxt}>Consultas Marcadas</Text>
                        <TouchableOpacity style={gstyles.seeMore} onPress={() => navigation.navigate('Consultas', { modalOpen: false })}>
                            <Text style={gstyles.seeMoreTxt}>Ver todas</Text>
                            <Feather color={mainTextColor} size={16} style={gstyles.seeMoreIcon} name='chevron-right' />
                        </TouchableOpacity>
                    </View>
                    <ListaConsultas/>
                    <View style={{ ...styles.marcarBtn, position: 'relative', marginTop: "5%" }}>
                        <BtnHome nome={'Marcar Consulta'} pressFunction={() => navigation.navigate('Map', { modalOpen: true })} />
                    </View>
                </View>

                    : null}
            </ScrollView>
            
        </View>
    );
}
/**
 * list
 * {consultas.map((consulta, index) => (
                            <TouchableOpacity key={index} style={gstyles.listTextButton} onPress={() => navigation.navigate('Consultas Marcadas', { nome: consulta.especialidade })}>
                                <View style={gstyles.listButtonIcon}>
                                    <Feather size={24} name={'calendar'} />
                                </View>
                                <View style={gstyles.listButtonTxt}>
                                    <View style={gstyles.listButtonExtra}>
                                        <Text numberOfLines={1} style={gstyles.listButtonTitle}>{consulta.especialidade}</Text>
                                        <Text style={gstyles.listButtonDesc}>{consulta.date}</Text>
                                    </View>
                                    <Text numberOfLines={1} style={gstyles.listButtonDesc}>{consulta.nomeMedico}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}


                        f view
                         <View style={styles.listAreaHeader}>
                        <Text style={styles.listAreaTxt}>Consultas Marcadas</Text>
                        <TouchableOpacity style={gstyles.seeMore} onPress={() => navigation.navigate('Consultas', { modalOpen: false })}>
                            <Text style={gstyles.seeMoreTxt}>Ver todas</Text>
                            <Feather color={mainTextColor} size={16} style={gstyles.seeMoreIcon} name='chevron-right' />
                        </TouchableOpacity>
                    </View>
 */