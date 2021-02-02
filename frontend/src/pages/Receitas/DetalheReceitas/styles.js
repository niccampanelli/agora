import { StyleSheet } from 'react-native';
import {  mainAppColor, mainTextColor, lightTextColor } from '../../../gstyles';

export default StyleSheet.create({
    
    subContainer: {
        paddingHorizontal: 20,
        height: '80%'
    },

    backbutton: {
        marginLeft: 10,
        marginBottom: 10,
        width: 50,
        height: 40
    },

    headerWithOption: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: mainTextColor,
    },

    headerSubTitle: {
        fontSize: 16,
        color: lightTextColor
    },

    section2: {
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
    },

    adress: {
        paddingBottom: 10,
        borderBottomColor: lightTextColor,
        borderBottomWidth: 1,
        marginBottom: 20
    },

    infoTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: mainTextColor
    },

    infoSubTitle: {
        fontSize: 20,
        color: lightTextColor
    },

});