import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.topButtons}>
                <TouchableHighlight onPress={() => {}}>
                    <View style={styles.button1}>
                        <Text>Consultas</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {}}>
                    <View style={styles.button1}>
                        <Text>Consultas</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.topButtons}>
                <View style={styles.topButtons}>
                    <TouchableHighlight onPress={() => {}}>
                        <View style={styles.button1}>
                            <Text>Consultas</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {}}>
                        <View style={styles.button1}>
                            <Text>Consultas</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight onPress={() => {}}>
                    <View style={styles.button1}>
                        <Text>Consultas</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.teste1}>
                <ScrollView horizontal='true' contentContainerStyle={}>
                    <View></View>
                    <View></View>
                    <View></View>
                </ScrollView>
            </View>
        </View>
    );
}