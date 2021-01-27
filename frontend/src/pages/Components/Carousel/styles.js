import { StyleSheet } from 'react-native';
import { lightTextColor, mainTextColor } from '../../../gstyles';

export const styles = StyleSheet.create({
  
    carousel: {
        flex: 1,
        flexDirection: 'row',
        width: '100%'
    },

    itemCard: {
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        borderRadius: 20,
        height: 120,
        paddingHorizontal: 60,
        paddingTop: 20
    },

    pillIcon: {
        paddingTop: 5,
        marginRight: 20
    },

    itemTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: mainTextColor
    },

    itemQtd: {
        color: lightTextColor
    },

    dotsContainer: {
        position: 'relative',
        top: -15
    },

    dotActive: {
        width: 15,
        height: 15,
        borderRadius: 100,
        backgroundColor: '#888'
    },

    navigators: {
        height: 120,
        width: '100%',
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    leftNav: {
        opacity: 0.4,
    },

    rightNav: {
        opacity: 0.4,
    },

});

export default styles;