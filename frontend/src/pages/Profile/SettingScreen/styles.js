import { StyleSheet } from 'react-native';
import {  mainAppColor, mainTextColor, lightTextColor } from '../../../gstyles';

export default StyleSheet.create({
    
    subContainer: {
        paddingHorizontal: 20
    },

    backbutton: {
        marginLeft: 10,
        marginBottom: 10,
        width: 50,
        height: 40
    },

    header: {
        paddingHorizontal: 20,
        marginBottom: 30
    },

    headerWithOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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

    infoEdit: {
    },

    listButton: {
        padding: 10,
        flexDirection: 'row',
        height: 60,
        marginBottom: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 10
    },

    listButtonInput: {
        height: 30,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16
    },

    listButtonRed: {
        padding: 10,
        flexDirection: 'row',
        height: 60,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#ffdddd',
        borderRadius: 10
    },

    listInputButton: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        height: 80,
        marginBottom: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 10
    },

    listTextButton: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        height: 80,
        marginBottom: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 10
    },

    listButtonIcon: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: mainAppColor,
        borderRadius: 15,
        width: 40
    },

    listButtonIconRed: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f44',
        borderRadius: 15,
        width: 40
    },

    listButtonTxt: {
        width: '80%',
        justifyContent: 'center',
    },

    listButtonTitle: {
        fontSize: 22,
        color: mainTextColor,
        fontWeight: 'bold'
    },
    
    listButtonDesc: {
        fontSize: 16,
        color: lightTextColor,
    }
});