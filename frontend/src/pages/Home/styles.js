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
        paddingHorizontal: 20,
        marginBottom: 10,
        height: 50
    },

    topButtons2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 30,
        height: 50
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
        paddingHorizontal: 20,
        marginHorizontal: 20,
        paddingTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#eee',
        height: 650,
    },

    listAreaHeader: {
        paddingHorizontal: 10,
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
    },

    marcarBtn: {
        width: '100%',
        height: 70,
        position: 'absolute',
        zIndex: 100,
        bottom: 0
    },

});