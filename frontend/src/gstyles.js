import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const mainAppColor = '#fff000';
const mainTextColor = '#555';

export default StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fafafa',
    },

    header: {
        height: 50,
        paddingHorizontal: 20
    },

    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#555'
    }
});