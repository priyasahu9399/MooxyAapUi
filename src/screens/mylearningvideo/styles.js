import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.93,
    alignSelf: 'center',
    marginVertical: height * 0.02
  },
  title: {
    fontSize: width * 0.036,
    ...FONTS.sixHundred,
    color: COLORS.black,
  },
  bluename: {
    fontSize: width * 0.034,
    ...FONTS.sixHundred,
    color: COLORS.primary,
    marginBottom: -3,
  },
  border: {
    borderBottomWidth: 3,
    borderColor: COLORS.primary,
  },
});
