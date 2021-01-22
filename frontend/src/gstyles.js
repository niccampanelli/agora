import { StyleSheet } from 'react-native';

const mainAppColor = '#fff000';
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

    sheetTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#555',
        marginBottom: 10
    },

    sheetBottomOptions: {
        position: 'absolute',
        bottom: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },

    sheetBottomOptionsTxt: {
        color: '#0af',
        fontSize: 20
    },
});

export default gstyles;
export { mainAppColor, mainTextColor };