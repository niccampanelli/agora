import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const mainAppColor = '#fff000';

export default StyleSheet.create({
    
    subContainer: {
        paddingHorizontal: 20
    },

    backbutton: {
        marginLeft: -10,
        marginBottom: 10,
        width: 50,
        height: 40
    },

    header: {
        height: 50,
        paddingHorizontal: 20,
        marginBottom: 65
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#555'
    },

    listButton: {
        padding: 10,
        flexDirection: 'row',
        height: 60,
        marginBottom: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 10
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
        color: '#555',
        fontWeight: 'bold'
    },
    
    listButtonDesc: {
        fontSize: 16,
        color: '#888',
    }
});