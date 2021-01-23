import React from 'react';
import styles from '../styles';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ConfigButton(props){

    const navigation = useNavigation();
    
    return(
        <TouchableOpacity style={styles.listButton} onPress={() => {navigation.navigate(props.destination, props.args)}}>
            <View style={styles.listButtonIcon}>
                <Feather size={24} name={props.iconName}/>
            </View>
            <View style={styles.listButtonTxt}>
                <Text style={styles.listButtonTitle}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
}