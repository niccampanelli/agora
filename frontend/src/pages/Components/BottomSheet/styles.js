import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  
  sheetBackground: {
    flex: 1,
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    backgroundColor: '#00000055',
  },

  sheet: {
    position: 'relative',
    zIndex: 11,
    backgroundColor: '#fafafa',
    width: '100%',
    height: 400,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20
  },

});

export default styles;