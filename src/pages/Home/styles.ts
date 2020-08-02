import { StyleSheet } from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#1C1A22',
    alignItems: 'center',
  }, 
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
