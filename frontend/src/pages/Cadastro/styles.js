import { StyleSheet } from 'react-native';
import { mainAppColor, mainTextColor, layer0Color, lightTextColor } from '../../gstyles';

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
        height: "100%"

    },
    loginCard: {
        flex:1,
        height: '100%',
        margin: 30
    },

    loginHeader: {
        height: 100,
        marginBottom:'30%'
    },

    loginTitle: {
        fontSize: 32,
        fontWeight: 'bold'
    },

    loginSubtitle: {
        marginTop: 10,
        marginBottom:10,
        fontSize: 16,
        color: lightTextColor
    },

    inputsArea: {
        height: '25%'
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
        marginBottom:10,
        marginTop:'5%'
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
        paddingTop: 20,
        width: '100%',
        height: '25%'
    },

    buttonArea: {
        width: '100%',
        height: 50,
        marginBottom: 20
    },

    hintText: {
        fontSize: 16,
        color: lightTextColor
    },

    hintLink: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: '10%'
    },
    viewSexo: {
        flex: 1,
        alignItems: 'flex-start',
        marginBottom: '5%'
    },
    radioBtn: {
        flexDirection: 'row',

        justifyContent: 'space-around',
        alignItems:'center'
    },
    radio: {
        borderRadius: 20,
        borderWidth: 2,
        height: '50%',
        width: 25,
        marginRight: '10%',
        alignItems: 'center'
    }

});

