import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  carousel: {
    flex: 1,
    flexDirection: 'row',
    width: '100%'
  },

  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 20,
    padding: 30,
  },

  pillIcon: {
    paddingTop: 5,
    marginRight: 10
  },

  itemTitle: {
    fontSize: 24,
  },

  itemQtd: {
    color: '#888'
  }

});

export default styles;