import React from 'react';
import gstyles from '../../gstyles';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ConfigTextButton(props){

    const navigation = useNavigation();
    
    return(
        <TouchableOpacity style={gstyles.listTextButton} onPress={() => {navigation.navigate(props.destination, props.args)}}>
            <View style={gstyles.listButtonIcon}>
                <Feather size={24} name={props.iconName}/>
            </View>
            <View style={gstyles.listButtonTxt}>
                <Text style={gstyles.listButtonTitle}>{props.name}</Text>
                <Text style={gstyles.listButtonDesc}>{props.desc}</Text>
            </View>
        </TouchableOpacity>
    );
}