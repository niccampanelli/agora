import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  
  carousel: {
    flex: 1,
    flexDirection: 'row',
    width: '100%'
  },

  itemCard: {
    justifyContent:'space-around',
    backgroundColor:'#ddd',
    borderRadius: 20,
    padding: 50,
  }

});

export default styles;