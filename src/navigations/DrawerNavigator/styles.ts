import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    zIndex: 999,
    overflow: 'hidden',
  },
  outerStyle: {
    flex: 1,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default styles;
