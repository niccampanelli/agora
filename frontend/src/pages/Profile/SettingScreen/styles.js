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
});