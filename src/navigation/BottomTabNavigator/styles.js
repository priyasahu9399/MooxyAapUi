import {Dimensions, StyleSheet} from 'react-native';
import {FONTS, COLORS} from './../../constants';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    width: width * 0.046,
    height: height * 0.04,
    resizeMode: 'contain',
    marginRight: width * 0.045,
  },
  toggle: {
    height: height * 0.029,
    width: width * 0.08,
    marginHorizontal: width * 0.04,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },

  icon_set: {
    width: width * 0.055,
    height: height * 0.03,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: COLORS.gray60,
    marginTop: height * 0.01,
  },

  tablebal: {
    ...FONTS.sixHundred,
    fontSize: width * 0.028,
    marginBottom: 6,
  },
  headerstyle: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: COLORS.primary,
  },
  // bell: {
  //   width: width * 0.06,
  //   height: height * 0.048,
  //   resizeMode: 'contain',
  //   marginRight: width * 0.045,
  // },
  headerTitle: {
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: width * 0.05,
  },
  borderTop: {
    width: width * 0.16,
    height: width * 0.012,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  tableBarstyle: {
    height: height * 0.074,
    color: COLORS.gray50,
  },
});
