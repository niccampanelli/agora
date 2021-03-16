import React from 'react';
import { View, Text, TouchableOpacity, ScrollView , StatusBar} from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import gstyles, {mainAppColor, mainTextColor, lightTextColor} from '../../gstyles';
import BtnHome from '../Components/BtnHome';
import Carousel from '../Components/Carousel';
import consultasRaw from '../Consultas/Dados'
import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();
    const consultas = consultasRaw.slice(0, 5);

    return(
    <View style={gstyles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Olá, Rafael!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.headerButton}>
                <View>
                    <Feather color={mainTextColor} size={26} name='user'/>
                </View>
            </TouchableOpacity>
        </View>
            <View style={styles.marcarBtn}>
                <BtnHome nome={'Marcar Consulta'} pressFunction={() => navigation.navigate('Map', {modalOpen: true})}/>
            </View>
        <ScrollView
            showsVerticalScrollIndicator={false}
            pagingEnabled
        >
            <View style={styles.topButtons}>
                <BtnHome nome={'Unidades de Saúde'}/>
            </View>
            <View style={styles.topButtons2}>
                <BtnHome nome={'Vacinas'}/>
            </View>
            <View style={styles.carouselArea}>
                <View style={styles.receitasTitle}>
                    <Text style={styles.receitasTitleText}>Receitas</Text>
                    <TouchableOpacity style={gstyles.seeMore} onPress={() => navigation.navigate('Receitas')}>
                        <Text style={gstyles.seeMoreTxt}>Ver todas</Text>
                        <Feather color={mainTextColor} size={16} style={gstyles.seeMoreIcon} name='chevron-right'/>
                    </TouchableOpacity>
                </View>
                <Carousel items={[{
                            label: 'Paracetamol',
                            qtd:'2 capsulas por dia'
                        }, {
                            label: 'Ibuprofeno',
                            qtd:'2 capsulas por dia'
                        }, {
                            label: 'Dipirona',
                            qtd:'2 capsulas por dia'
                        }, {
                            label: 'Cloroquina',
                            qtd:'2 capsulas por dia'
                        }, {
                            label: 'Hidroxocloroquina',
                            qtd:'2 capsulas por dia'
                        }, {
                            label: 'Sei la',
                            qtd:'2 capsulas por dia'
                        }]}/>
            </View>
            <View style={styles.listArea}>
                <View style={styles.sheetGrab}>
                    <View style={styles.sheetGrabInner}/>
                </View>
                <View style={styles.listAreaHeader}>
                    <Text style={styles.listAreaTxt}>Consultas Marcadas</Text>
                    <TouchableOpacity style={gstyles.seeMore} onPress={() => navigation.navigate('Consultas', {modalOpen: false})}>
                        <Text style={gstyles.seeMoreTxt}>Ver todas</Text>
                        <Feather color={mainTextColor} size={16} style={gstyles.seeMoreIcon} name='chevron-right'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.consultasList}>
                    {consultas.map((consulta, index) => (
                        <TouchableOpacity key={index} style={gstyles.listTextButton} onPress={() => navigation.navigate('Consultas Marcadas', { nome: consulta.especialidade })}>
                            <View style={gstyles.listButtonIcon}>
                                <Feather size={24} name={'calendar'}/>
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
                </View>
            </View>
        </ScrollView>
    </View>
    );
}