import { StyleSheet } from 'react-native';

const mainAppColor = '#ffea00';
const mainTextColor = '#555';

const gstyles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fafafa',
        paddingTop: 10
    },

    header: {
        height: 50,
        paddingHorizontal: 20
    },

    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#555'
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
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
        paddingBottom: 100,
        backgroundColor: '#fff'
    },

    bottomSheetInfo: {
        paddingHorizontal: 25
    },
    
    bottomSheetTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#555',
        marginBottom: 10
    },

    bottomSheetPage: {
        paddingTop: 30,
        paddingHorizontal: 20,
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
});

export default gstyles;
export { mainAppColor, mainTextColor };