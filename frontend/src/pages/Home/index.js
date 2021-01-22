import React from 'react';
import { View, Text, TouchableOpacity, ScrollView , StatusBar} from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import gstyles from '../../gstyles';
import Carousel from '../Components/Carousel';
import Consultas from '../Consultas/Dados'
import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();
   


    function BtnHome(props){
        return(
            <View style={styles.button1}>
            <TouchableOpacity activeOpacity={0} style={styles.button1bt} onPress={() => {}}>
                <Text style={styles.button1tx}>{props.nome}</Text>
            </TouchableOpacity>
        </View>
        )
    }

    return(
    <View style={gstyles.container}>
        <View style={styles.header}>
        <StatusBar
                barStyle='dark-content'
                backgroundColor={'#fafafa'}
                />
            <Text style={styles.headerText}>Olá, Rafael!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.headerButton}>
                <View>
                    <Feather size={26} name='user'/>
                </View>
            </TouchableOpacity>
        </View>
        <ScrollView
            showsVerticalScrollIndicator={false}
            pagingEnabled
        >
            <View style={styles.topButtons}>
                <BtnHome nome={'Hospitais'}/>
                <BtnHome nome={'Postos'}/>
            </View>
            <View style={styles.topButtons2}>
                <BtnHome nome={'Vacinas'}/>
            </View>
            <View style={styles.carouselArea}>
                <View style={styles.receitasTitle}>
                    <Text style={styles.receitasTitleText}>Receitas</Text>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'baseline'}} onPress={() => navigation.navigate('Consultas')}>
                        <Text style={{opacity: 0.4}}>Ver todas</Text>
                        <Feather size={16} style={{opacity: 0.4}} name='chevron-right'/>
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
                        }]}/>
            </View>
            <View style={styles.listArea}>
                <View style={styles.sheetGrab}>
                    <View style={styles.sheetGrabInner}/>
                </View>
                <View style={styles.listAreaHeader}>
                    <Text style={styles.listAreaTxt}>Consultas Marcadas</Text>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'baseline'}} onPress={() => navigation.navigate('Consultas')}>
                        <Text style={{opacity: 0.4}}>Ver todas</Text>
                        <Feather size={16} style={{opacity: 0.4}} name='chevron-right'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.consultasList}>
                    {Consultas.map((consulta, index) => (
                        <View key={consulta.title} style={styles.consultasListItem}>
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