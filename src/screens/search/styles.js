import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  searchtitle: {
    fontSize: width * 0.034,
    ...FONTS.fiveHundred,
    color: COLORS.black,
  },
  rowtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.018,
    width: width * 0.93,
    alignSelf: 'center',
  },

  searchbox: {
    height: height * 0.058,
    width: width * 0.93,
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray30,
    alignSelf: 'center',
    elevation: 4,
    paddingHorizontal: width * 0.02,
  },
  search: {
    height: height * 0.022,
    width: width * 0.05,
    marginHorizontal: width * 0.02,
    resizeMode: 'stretch',
    tintColor: COLORS.primary,
  },
  searchinput: {
    width: width * 0.7,
    ...FONTS.fourHundred,
    fontSize: width * 0.034,
    marginBottom: -3,
    color: COLORS.black,
  },

  cross: {
    marginHorizontal: width * 0.015,
    tintColor: COLORS.black,
    width: width * 0.06,
    height: height * 0.024,
  },
});
