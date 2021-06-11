import { StyleSheet } from 'react-native';
import {  mainAppColor, mainTextColor, layer0Color, lightTextColor } from '../../gstyles';
import Constants from 'expo-constants';
export default StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: layer0Color,
    },
    
    loginCard: {
        position: 'relative',
        height: '100%',
        margin: 30
    },

    loginHeader: {
        height: '28%',
    },

    loginTitle: {
        fontSize: 32,
        fontWeight: 'bold'
    },

    loginSubtitle: {
        marginTop: 10,
        fontSize: 16,
        color: lightTextColor
    },

    inputsArea: {
        paddingTop: '10%',
        height: '40%',
    },

    labelView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },

    inputLabel: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    labelHint: {
        color: lightTextColor,
        fontSize: 14
    },

    loginInput: {
        height: 40,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        fontSize: 16
    },

    sendArea: {
        width: '100%',
        height: '20%'
    },
    
    buttonArea: {
        width: '100%',
        height: 50,
        marginBottom: 40
    },

    hintText: {
        fontSize: 16,
        color: lightTextColor
    },

    hintLink: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    },


});

