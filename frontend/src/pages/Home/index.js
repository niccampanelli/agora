import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableHighlight, TouchableOpacity, ScrollView, Button } from 'react-native';
import styles from './styles';
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
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Olá, Nicholas</Text>
                <TouchableHighlight onPress={() => navigation.navigate('Profile')} style={styles.headerButton}>
                    <View>
                        <Feather size={26} name='user'/>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.topButtons}>
                <View style={styles.button1}>
                    <TouchableHighlight activeOpacity={0} style={styles.button1bt} onPress={() => {}}>
                        <Text style={styles.button1tx}>Consultas</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.button1}>
                    <TouchableHighlight style={styles.button1bt} onPress={() => {}}>
                        <Text style={styles.button1tx}>Postos</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.topButtons2}>
                <View style={styles.button1}>
                    <TouchableHighlight style={styles.button1bt} onPress={() => {}}>
                        <Text style={styles.button1tx}>Consultas</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.button1}>
                    <TouchableHighlight style={styles.button1bt} onPress={() => {}}>
                        <Text style={styles.button1tx}>Postos</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.carouselArea}>
                <Carousel
                    items={[{
                        label: 'Paracetamol'
                    }, {
                        label: 'Ibuprofeno'
                    }, {
                        label: 'Dipirona'
                    }]}
                />
            </View>
            <View style={styles.listArea}>
                <Text style={styles.listAreaTxt}>Consultas Marcadas</Text>
                <FlatList
                    data={consultas}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item: consulta}) => (
                        <View>
                            <Text>{consulta.title}</Text>
                            <Text>{consulta.date}</Text>
                        </View>
                    )
                    }
                />
            </View>
        </View>
    );
}