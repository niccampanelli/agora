import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const mainAppColor = '#fff000';
const mainTextColor = '#555';

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
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },

    profileButton: {
    },

    headerText: {
        fontSize: 25,
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
        marginBottom: 20,
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
        height: 280,
        marginBottom: 30,
        
    },

    receitasTitle: {
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
        paddingTop: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: mainAppColor,
        height: 650,
        borderWidth:0.5
    },

    listAreaHeader: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    listAreaTxt: {
        fontSize: 25,
        color: mainTextColor,
        fontWeight: 'bold',
    },

    consultasList: {

    },

    consultasListItem: {
        height:35,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 2,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    consultasTitle: {
        fontSize: 20,
    }
});