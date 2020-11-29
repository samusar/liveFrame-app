import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const style = StyleSheet.create({
  containerScroll: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('100%'),
  },
  container: {
    flex: 0.5,
    padding: 32,
    alignItems: 'flex-start',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    color: '#BEBEBE',
    marginVertical: 30,
  },
  headerTable: {
    backgroundColor: '#FF7A00',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  textTitleTable: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Roboto_500Medium',
    marginLeft: 10,
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#28262E',
    borderBottomWidth: 1,
  },
  textIdItem: {
    color: '#E3E3E3',
    fontSize: 18,
    fontFamily: 'Roboto_500Medium',
    marginHorizontal: 20,
  },
  textDescriptionItem: {
    color: '#E3E3E3',
    fontSize: 18,
    fontFamily: 'Roboto_500Medium',
  },
  textExcludeItem: {
    color: '#D83636',
    fontSize: 18,
    fontFamily: 'Roboto_300Light',
    marginHorizontal: 20,
  },
  buttonAddContent: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#53BF6B',
    height: heightPercentageToDP('6%'),
    width: heightPercentageToDP('6%'),
    borderRadius: heightPercentageToDP('3%'),
    margin: heightPercentageToDP('3%'),
  },
  textButtonAddContent: {
    color: '#fff',
    fontSize: 22,
  },
});

export default style;
