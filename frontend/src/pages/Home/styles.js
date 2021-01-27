import { StyleSheet } from 'react-native';
import {  mainAppColor, mainTextColor, layer0Color, lightTextColor } from '../../gstyles';

export default StyleSheet.create({
    sheetGrab: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },

    sheetGrabInner: {
        backgroundColor: '#aaa',
        opacity: 0.3,
        height: 6,
        width: 160,
        borderRadius: 100
    },

    header: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },

    profileButton: {
    },

    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: mainTextColor
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
        marginBottom: 30,
        height: 50
    },

    button1: {
        paddingHorizontal: 5,
        flex: 1,
    },

    button1bt: {
        flex: 1,
        backgroundColor: mainAppColor,
        borderRadius: 8
    },

    button1tx: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 19,
        color: mainTextColor,
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    carouselArea: {
        paddingHorizontal: 20,
        height: 120,
        marginBottom: 120,
    },

    receitasTitle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    receitasTitleText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        color: mainTextColor
    },

    listArea: {
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.90,
        shadowRadius: 10.30,
        elevation: 25,
        paddingHorizontal: 40,
        paddingTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: mainAppColor,
        height: 650,
    },

    listAreaHeader: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    listAreaTxt: {
        fontSize: 24,
        color: mainTextColor,
        fontWeight: 'bold'
    }, 

    consultasMarcadas: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        marginTop: 10,
        fontSize: 25,
        color: mainTextColor,
        fontWeight: 'bold',
    },

    consultasListItem: {
        height: 31,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 2,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 20
    },

    consultasTitle: {
        fontSize: 20,
    }

});