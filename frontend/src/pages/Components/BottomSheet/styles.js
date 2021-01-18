import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  
  sheetBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },

  sheet: {
    backgroundColor: '#ff0',
    width: '100%'
  },

});

export default styles;