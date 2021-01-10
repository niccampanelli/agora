import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  
  carousel: {
    flex: 1,
    flexDirection: 'row'
  },

  item: {
    width: screenWidth - 40,
    padding: 10
  },

  itemCard: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0,
    shadowRadius: 10.0,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',
    elevation: 3,
  }

});

export default styles;