import { StyleSheet } from 'react-native';
import { mainAppColor, mainTextColor, lightTextColor } from '../../gstyles';

export default StyleSheet.create({

    subContainer: {
        paddingHorizontal: 20,
    },

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

    listButton: {
        padding: 10,
        flexDirection: 'row',
        height: 60,
        marginBottom: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 10
    },

    listTextButton: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        height: 80,
        marginBottom: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 10
    },

    listButtonIcon: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: mainAppColor,
        borderRadius: 15,
        width: 40
    },

    listInputButtonIcon: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: mainAppColor,
        borderRadius: 15,
        width: 40
    },

    listButtonTxt: {
        width: '80%',
        justifyContent: 'center',
    },

    listButtonTitle: {
        fontSize: 22,
        color: mainTextColor,
        fontWeight: 'bold'
    },

    listButtonDesc: {
        fontSize: 16,
        color: lightTextColor,
    }

    ,

    header2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
        margin: '5%'
    },
    btnVoltar: {
        backgroundColor: mainAppColor,
        width:'100%',
        height:'10%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:'15%',
        borderRadius:10
    },

    textBtn:{
        color:mainTextColor,
        fontSize:22,
    }

});

/**
 * { ...gstyles.listTextButton, marginTop: '15%', alignSelf: 'center', alignItems: 'center'}
 */