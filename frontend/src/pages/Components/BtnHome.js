import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import gstyles from '../../gstyles';

export default function BtnHome(props){
    return(
        <View style={gstyles.button1}>
            <TouchableOpacity activeOpacity={0} style={gstyles.button1bt} onPress={props.pressFunction}>
                <Text style={gstyles.button1tx}>{props.nome}</Text>
            </TouchableOpacity>
        </View>
    )
}