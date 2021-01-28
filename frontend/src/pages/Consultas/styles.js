import { StyleSheet } from 'react-native';
import { mainAppColor, mainTextColor, lightTextColor, layer0Color } from '../../gstyles';

export default StyleSheet.create({

    backbutton: {
        marginLeft: -10,
        marginBottom: 10,
        width: 50,
        height: 40
    },

    header: {
        paddingHorizontal: 20,
        marginBottom: 30
    },

    headerWithOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: mainTextColor,
    },

    headerSubTitle: {
        fontSize: 16,
        color: lightTextColor
    },

    dataList: {
        paddingHorizontal: 20,
    },

    listaConsultasMarcadas:{
        marginTop:"5%",
        flexDirection:'row',
        borderBottomColor: '#000',
        borderWidth:1,
        justifyContent:'space-between',
        marginBottom: 1,
        marginStart:"2%",
        marginEnd:"2%",
        borderRadius:10,
        height:80,
        alignItems:'center'
    },
    consultasTitle: {
        fontSize: 24,
        marginBottom:10
    },
    consultasDate:{
        fontSize:20
    },
    btnAdd:{
        backgroundColor: mainAppColor,
        zIndex: 1,
        end: "6%",
        position: 'absolute',
        bottom: "5%",
        opacity: 0.8,
        borderRadius: 100,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerModal: {
        paddingTop: 20,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
    },

    closeButton: {
        zIndex: 1,
        position: 'absolute',
        left: 20,
        top: 20
    },

    headerModalTitle: {
        width: '100%',
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: mainTextColor
    },

    headerModalSubitle: {
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        color: lightTextColor,
        paddingHorizontal: 80,
        marginBottom: 30
    },
});