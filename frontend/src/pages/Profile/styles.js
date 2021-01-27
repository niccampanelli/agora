import { StyleSheet } from 'react-native';
import {  mainAppColor, mainTextColor, lightTextColor } from '../../gstyles';

export default StyleSheet.create({
    
    subContainer: {
        paddingHorizontal: 20,
    },

    backbutton: {
        marginLeft: -10,
        marginBottom: 10,
        width: 50,
        height: 40
    },

    header: {
        paddingHorizontal: 20,
        marginBottom: 30
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: mainTextColor,
    },

    headerSubTitle: {
        fontSize: 16,
        color: lightTextColor
    },

});