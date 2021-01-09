import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Carousel from '../Components/Carousel';

export default StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fafafa',
        paddingTop: Constants.statusBarHeight + 40,
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