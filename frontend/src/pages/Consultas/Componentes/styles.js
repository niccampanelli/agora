import { StyleSheet } from 'react-native';
import { mainAppColor, mainTextColor, lightTextColor, layer0Color } from '../../../gstyles';

export default StyleSheet.create({
    headerConsInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: "5%",
    },
    webView: {
        borderWidth: 1,
        borderColor:lightTextColor,
        borderRadius: 10,
        height: '50%',
        width: '100%',
        alignSelf: 'center',
        
    },
    headerTexto: {
        alignItems: 'flex-start',
        width: "70%",
        justifyContent: 'center',
    },

    voltar: {
        marginLeft: "10%",
        width: 40,
        height: 40
    },

    info: {
        borderWidth:1,
        borderColor:lightTextColor,
        shadowColor: mainAppColor,
        margin: "2%",
        flex: 1,
        borderRadius: 10,
        padding: "2%",
        flexWrap: 'wrap'
    },

    blocoInfo: {
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
    headerCons: {
        alignItems: 'flex-start',
        marginLeft: '10%',
        marginTop: '10%',
    },
    headerConsText: {
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: '5%',
        color: mainTextColor
    },
    headerConsSubText: {
        fontSize: 16,
        color: lightTextColor,
    },
    modalCons: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex:1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: '0%'
    },
    closeButton: {
        position: 'absolute',
        right: '5%',
        top: '5%',
    },
    buttonRemove: {
        width: 80,
        height: '90%',
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",

    }
})