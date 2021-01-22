import { StyleSheet } from 'react-native';
import { mainAppColor, mainTextColor } from '../../gstyles';

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

    listInputButtonIcon: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: mainAppColor,
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