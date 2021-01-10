import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, ScrollView, Button } from 'react-native';
import styles from './styles';
import gstyles from '../../gstyles';
import Carousel from '../Components/Carousel';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

export default function Home(){

    const navigation = useNavigation();
    const consultas = [{
        title: 'Dermatologista',
        date: '14/10'
    }, {
        title: 'Oculista',
        date: '30/05'
    }, {
        title: 'Oculista',
        date: '30/05'
    }, {
        title: 'Oculista',
        date: '30/05'
    }, {
        title: 'Oculista',
        date: '30/05'
    }, {
        title: 'Oculista',
        date: '30/05'
    }, {
        title: 'Oculista',
        date: '30/05'
    }];

    return(
    <View style={gstyles.container}>
        <View style={styles.header}>
                <Text style={styles.headerText}>Olá, Nicholas!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.headerButton}>
                    <View>
                        <Feather size={26} name='user'/>
                    </View>
                </TouchableOpacity>
            </View>
        <ScrollView pagingEnabled={true} showsVerticalScrollIndicator={false} style={styles.subContainer}>
            <View style={styles.topButtons}>
                <View style={styles.button1}>
                    <TouchableOpacity activeOpacity={0} style={styles.button1bt} onPress={() => {}}>
                        <Text style={styles.button1tx}>Postos</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button1}>
                    <TouchableOpacity style={styles.button1bt} onPress={() => {}}>
                        <Text style={styles.button1tx}>Hospitais</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.topButtons2}>
                <View style={styles.button1}>
                    <TouchableOpacity style={styles.button1bt} onPress={() => {}}>
                        <Text style={styles.button1tx}>Vacinas</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.carouselArea}>
                <Text style={styles.receitasTitle}>Receitas</Text>
                <Carousel  items={[{
                        label: 'Paracetamol',
                        qtd:'2 capsulas por dia'
                    }, {
                        label: 'Ibuprofeno',
                        qtd:'2 capsulas por dia'
                    }, {
                        label: 'Dipirona',
                        qtd:'2 capsulas por dia'
                    }]}/>
            </View>
            <View style={styles.listArea}>
                <View style={styles.sheetGrab}>
                    <View style={styles.sheetGrabInner}/>
                </View>
                <View style={styles.listAreaHeader}>
                    <Text style={styles.listAreaTxt}>Consultas Marcadas</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Consultas')}><Text>Ver todas</Text></TouchableOpacity>
                </View>
                <View style={styles.consultasList}>
                    {consultas.map((consulta) => (
                        <View style={styles.consultasListItem}>
                            <Text style={styles.consultasTitle}>{consulta.title}</Text>
                            <Text style={styles.consultasDate}>{consulta.date}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    </View>
    );
}