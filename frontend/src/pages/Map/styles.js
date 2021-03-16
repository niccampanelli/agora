import { StyleSheet } from "react-native";
import Constants from 'expo-constants';
import {layer0Color,mainTextColor,mainAppColor} from '../../gstyles'


const styles = StyleSheet.create({

    container: {
        padding: 0,
        position: 'absolute',
        width: '100%',
        height: '100%'
    },

    webView: {
        padding: 0
    },

    mapOverlay: {
        position: 'absolute',
        paddingTop: Constants.statusBarHeight + 20,
        paddingHorizontal: 10,
        width: '100%',
        height: '100%',
    },

    backButton: {
    }

})

export default styles