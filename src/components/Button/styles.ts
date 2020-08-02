import { StyleSheet } from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: widthPercentageToDP('80%'),
    height: 80,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontFamily: 'Roboto_500Medium',
    color: '#E3E3E3',
    fontSize: widthPercentageToDP(5),
  },
  icon: {
    marginRight: 10,
  }
});

export default style;
