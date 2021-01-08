import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Carousel from '../Components/Carousel';

export default StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight + 40,
    },

    listButton: {
        height: 50,
        paddingHorizontal: 20
    },

    listButtonTxt: {
        fontSize: 20
    }
});