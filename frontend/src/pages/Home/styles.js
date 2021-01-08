import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Carousel from '../Components/Carousel';

export default StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight + 40,
    },

    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },

    profileButton: {
    },

    headerText: {
        fontSize: 30
    },

    topButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 10,
        height: 50
    },

    topButtons2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 50
    },

    button1: {
        paddingHorizontal: 5,
        flex: 1,
    },

    button1bt: {
        flex: 1,
        backgroundColor: '#ffff00',
        borderRadius: 8
    },

    button1tx: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 19,
        color: '#555',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    carouselArea: {
        width: '100%',
        height: 200
    },

    listArea: {
        paddingHorizontal: 40,
        paddingTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#ffff00',
        height: 1000
    },

    listAreaTxt: {
        fontSize: 20,
        color: '#555',
        fontWeight: 'bold'
    }
});