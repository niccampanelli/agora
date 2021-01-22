import React, { useRef } from 'react';
import styles from '../styles';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ConfigInputButton(props){

    const navigation = useNavigation();
    const inputRef = useRef();
    
    return(
        <TouchableOpacity style={styles.listInputButton} onPress={() => {inputRef.current.focus()}}>
            <View style={styles.listInputButtonIcon}>
                <Feather size={24} name={props.iconName}/>
            </View>
            <View style={styles.listButtonTxt}>
                <Text style={styles.listButtonTitle}>{props.name}</Text>
                    <TextInput 
                        style={styles.listButtonInput} 
                        autoCompleteType={'password'} 
                        secureTextEntry 
                        value={passValue} 
                        onChange={e => {setPass(e.target.value)}} ref={passRef}
                    />
            </View>
        </TouchableOpacity>
    );
}