import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import gstyles from '../../gstyles';
import Carousel from '../Components/Carousel';
import { useNavigation } from '@react-navigation/native';

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


    function BtnHome(props){
        return(
            <View style={styles.button1}>
            <TouchableHighlight activeOpacity={0} style={styles.button1bt} onPress={() => {}}>
                <Text style={styles.button1tx}>{props.nome}</Text>
            </TouchableHighlight>
        </View>
        )
    }

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
        <View style={styles.carouselArea}>
            <Text style={styles.receitasTitle}>Receitas</Text>
            <Carousel items={[{
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
    </View>
    );
}