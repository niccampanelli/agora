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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: "5%",
    },
    headerModalSubitleView:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'5%',
        marginTop:'5%'
    },
    headerModalSubitle:{
        fontWeight:'bold',
        letterSpacing:1
    },

    headerTexto: {
        alignItems: 'center',
        width: "70%",
        fontWeight:'bold',
        justifyContent: 'center',
        fontSize:24,
        color:mainTextColor
    },
    headerModal:{
        justifyContent:'space-evenly',

        alignItems:'center',
        flexDirection:'row',
        marginTop:'10%'
    },

    voltar:{
        marginLeft: 5,
        width: 40,
        height: 40
    },

    info:{
        borderWidth:0.5,
        margin: "2%",
        flex: 1,
        borderRadius: 10,
        padding: "2%",
        flexWrap: 'wrap'
    },

    blocoInfo:{
        flexDirection: 'row',
        marginTop: "1%",
        padding: 10,
        
    },

    hospList: {
        paddingHorizontal: 20
    },

    buttonEnter: {
        height: '100%',
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },


})

export default styles