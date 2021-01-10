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
    borderRadius: 50,
    padding: 50,
    marginLeft: 25,
    marginRight: 25
  }

});

export default styles;