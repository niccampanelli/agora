import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const mainAppColor = '#ffea00';
const layer0Color = '#fafafa';
const mainTextColor = '#666';
const lightTextColor = '#aaa';

const gstyles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: layer0Color,
        paddingTop: Constants.statusBarHeight + 10
    },

    header: {
        height: 50,
        paddingHorizontal: 20
    },

    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: mainTextColor
    },

    button1: {
        width: '100%',
        height: '100%',
    },

    button1bt: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainAppColor,
        borderRadius: 10
    },

    button1tx: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 19,
        color: mainTextColor,
        textAlign: 'center',
        textAlignVertical: 'center',
    },


    seeMore: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        opacity: 0.4
    },

    bottomSheetBackground: {
        position: 'absolute',
        backgroundColor: '#00000055',
        width: '100%',
        height: '110%',
    },

    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
        paddingBottom: 100,
        backgroundColor: layer0Color
    },

    bottomSheetInfo: {
        paddingHorizontal: 25
    },
    
    bottomSheetTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        color: mainTextColor,
    },

    bottomSheetPage: {
        paddingTop: 30,
        paddingHorizontal: 25,
        width: '100%'
    },

    bottomSheetOptions: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },

    bottomSheetOptionsTxt: {
        color: mainAppColor,
        fontSize: 20
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

    listButtonImg: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: '100%'
    },

    listButtonImgImage: {
        width: '100%',
        height: '100%'
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

    listButtonExtra: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    listButtonTitle: {
        width: '70%',
        fontSize: 22,
        color: mainTextColor,
        fontWeight: 'bold'
    },
    
    listButtonDesc: {
        fontSize: 16,
        color: lightTextColor,
    }
});

export default gstyles;
export { mainAppColor, mainTextColor, layer0Color, lightTextColor };