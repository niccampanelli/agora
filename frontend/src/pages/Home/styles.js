import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#eee',
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 20,
    },

    topButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button1: {
        height: 50,
        width: 100,
        backgroundColor: '#ddd'
    },

    teste1: {
        height: 100,
    }
});