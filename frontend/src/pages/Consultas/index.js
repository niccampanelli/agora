import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableHighlight, TouchableOpacity, ScrollView, Button, FlatList } from 'react-native';
import styles from './styles';
import gstyles from '../../gstyles';
import { useNavigation } from '@react-navigation/native';

export default function Consultas(){

    const navigation = useNavigation();

    return(
        <View style={gstyles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Consultas Marcadas</Text>
            </View>
        </View>
    );
}