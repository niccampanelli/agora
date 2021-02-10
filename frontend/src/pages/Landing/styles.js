import { StyleSheet } from 'react-native';
import {  mainAppColor, mainTextColor, lightTextColor, layer0Color } from '../../gstyles';

export default StyleSheet.create({
    
    container: {
        backgroundColor: layer0Color,
        width: '100%',
        height: '100%'
    },

    overlay: {
        padding: 20,
        width: '100%',
        height: '100%',
        zIndex: 10,
        position: 'absolute',
        top: 40
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: mainTextColor
    },

    subTitle: {
        fontSize: 18,
        color: lightTextColor
    },

    landingImage: {
        width: '100%',
        height: '100%',
    },

    nextButton: {
        position: 'absolute',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 100,
        left: 20,
        width: '100%',
        height: 50,
        backgroundColor: mainAppColor,
    },

    nextButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: mainTextColor
    },

});