import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import gstyles, {mainAppColor, mainTextColor, lightTextColor} from '../../gstyles';
import { useNavigation } from '@react-navigation/native';

export default function Receitas(){

    const navigation = useNavigation();

    return(
        <View style={gstyles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backbutton}><Feather color={lightTextColor} size={40} name={"chevron-left"}/></TouchableOpacity>
                <Text style={styles.headerTitle}>Receitas</Text>
                <Text style={styles.headerSubTitle}>Suas receitas prescritas por um médico. Toque em uma receita para ver mais detalhes sobre ela</Text>
            </View>
            <View style={styles.subContainer}>
                <TouchableOpacity style={gstyles.listTextButton} onPress={() => navigation.navigate('DetalheReceitas', {title: 'Paracetamol'})}>
                    <View style={gstyles.listButtonIcon}>
                        <MaterialCommunityIcons size={24} name={'pill'}/>
                    </View>
                    <View style={gstyles.listButtonTxt}>
                        <Text style={gstyles.listButtonTitle}>Paracetamol</Text>
                        <Text style={gstyles.listButtonDesc}>Duas capsulas por dia</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={gstyles.listTextButton} onPress={() => navigation.navigate('DetalheReceitas', {title: 'Ibuprofeno'})}>
                    <View style={gstyles.listButtonIcon}>
                        <MaterialCommunityIcons size={24} name={'pill'}/>
                    </View>
                    <View style={gstyles.listButtonTxt}>
                        <Text style={gstyles.listButtonTitle}>Ibuprofeno</Text>
                        <Text style={gstyles.listButtonDesc}>Duas capsulas por dia</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={gstyles.listTextButton} onPress={() => navigation.navigate('DetalheReceitas', {title: 'Dipirona'})}>
                    <View style={gstyles.listButtonIcon}>
                        <MaterialCommunityIcons size={24} name={'pill'}/>
                    </View>
                    <View style={gstyles.listButtonTxt}>
                        <Text style={gstyles.listButtonTitle}>Dipirona</Text>
                        <Text style={gstyles.listButtonDesc}>Duas capsulas por dia</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={gstyles.listTextButton} onPress={() => navigation.navigate('DetalheReceitas', {title: 'Cloroquina'})}>
                    <View style={gstyles.listButtonIcon}>
                        <MaterialCommunityIcons size={24} name={'pill'}/>
                    </View>
                    <View style={gstyles.listButtonTxt}>
                        <Text style={gstyles.listButtonTitle}>Cloroquina</Text>
                        <Text style={gstyles.listButtonDesc}>Duas capsulas por dia</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={gstyles.listTextButton} onPress={() => navigation.navigate('DetalheReceitas', {title: 'Sei lá'})}>
                    <View style={gstyles.listButtonIcon}>
                        <MaterialCommunityIcons size={24} name={'pill'}/>
                    </View>
                    <View style={gstyles.listButtonTxt}>
                        <Text style={gstyles.listButtonTitle}>Sei lá</Text>
                        <Text style={gstyles.listButtonDesc}>Duas capsulas por dia</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}