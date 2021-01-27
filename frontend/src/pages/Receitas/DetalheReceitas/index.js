import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import gstyles, {mainAppColor, mainTextColor, lightTextColor} from '../../../gstyles';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function DetalheReceitas(){

    const navigation = useNavigation();
    const route = useRoute();

    const title = route.params.title;

    return(
        <View style={gstyles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backbutton}><Feather color={lightTextColor} size={40} name={"chevron-left"}/></TouchableOpacity>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
            <View style={styles.subContainer}>
            </View>
        </View>
    );
}