/**
 * <<<<<<< HEAD
import { StyleSheet } from "react-native";

import {layer0Color,mainTextColor,mainAppColor} from '../../gstyles'


const styles = StyleSheet.create({

    container: {
        height: '100%',
      backgroundColor: layer0Color,

        paddingTop: 10,

        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    title:{
        fontSize: 25,
        fontWeight: 'bold',

     color: mainTextColor,

        marginBottom:'10%'
    },

    btnEntrar:{
        width:'60%',

        justifyContent:'center',
        alignItems:'center',

        borderWidth:1,
        borderRadius:5,

        marginTop:"5%"
    },

    cadOuEntrar:{
        marginTop:'20%',

        color:mainAppColor
    },


    input:{
        paddingLeft:"10%",
        marginBottom:'5%',

        borderRadius:5,
        borderWidth:1,
        
        width:"70%",
        
        
    }
})

export default styles
=======
 */
import { StyleSheet } from 'react-native';
import {  mainAppColor, mainTextColor, layer0Color, lightTextColor } from '../../gstyles';

export default StyleSheet.create({

    loginCard: {
        margin: 30
    },

    loginHeader: {
        marginBottom: 30
    },

    loginTitle: {
        fontSize: 32,
        fontWeight: 'bold'
    },

    loginSubtitle: {
        fontSize: 16,
        color: lightTextColor
    },

    inputsArea: {
        marginBottom: 20
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

    buttonArea: {
        marginBottom: 20
    },

    hintText: {
        fontSize: 16,
        color: lightTextColor
    },

    hintLink: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },


});

