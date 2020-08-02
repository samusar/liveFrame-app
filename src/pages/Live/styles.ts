import { StyleSheet } from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';

const style = StyleSheet.create({
  containerScroll: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('100%')
  },
  container: {
    paddingTop: 32,
    paddingHorizontal: 32,
    alignItems: 'flex-start',
  }, 
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeaderBold: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
    textAlign: 'left',
    color: '#BEBEBE',
  },
  textHeaderLight: {
    fontFamily: 'Roboto_300Light',
    fontSize: 14,
    textAlign: 'left',
    color: '#BEBEBE',
    flex: 1,
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
    paddingVertical: 20,
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
    fontSize: 14,
    fontFamily: 'Roboto_300Light',
    flex: 1,
  },
  textExcludeItem: {
    color: '#D83636',
    fontSize: 18,
    fontFamily: 'Roboto_300Light',
    marginHorizontal: 20,
  }, 
  previewContainer: {
    width: widthPercentageToDP('100%'),
    paddingHorizontal: widthPercentageToDP('5%'),
    marginVertical: 40,
    alignItems: 'center',
  },
  previewContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FF7A00',
    borderRadius: 10,
    borderWidth: 1,
    height: heightPercentageToDP('15%'),
    position: 'relative',
    paddingHorizontal: 20,
  },
  bannerLive: {
    position: 'absolute', 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#1C1A22',
    borderColor: '#FF7A00',
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    left: 20,
    top: '-15%',
  }, 
  textPreview: {
    color: '#E3E3E3',
    fontSize: 18,
    fontFamily: 'Roboto_500Medium',
    textAlign: 'center'
  },
  textIndexHeader: {
    color: '#E3E3E3',
    fontSize: 22,
    fontFamily: 'Roboto_500Medium',
    marginVertical: 18,
  },
  containerOptions: {
    flexDirection: 'row',
    width: '100%',
  },
  btPreview: {
    backgroundColor: '#A4A4A4',
    width: widthPercentageToDP('24%'),
    height: widthPercentageToDP('24%'),
    borderRadius: widthPercentageToDP('12%'),
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default style;
