import React from 'react';
import styles from '../styles';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ConfigTextButton(props){

    const navigation = useNavigation();
    
    return(
        <TouchableOpacity style={styles.listTextButton} onPress={() => {navigation.navigate(props.destination, props.args)}}>
            <View style={styles.listButtonIcon}>
                <Feather size={24} name={props.iconName}/>
            </View>
            <View style={styles.listButtonTxt}>
                <Text style={styles.listButtonTitle}>{props.name}</Text>
                <Text style={styles.listButtonDesc}>{props.desc}</Text>
            </View>
        </TouchableOpacity>
    );
}