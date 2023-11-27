import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  oneimg: {
    width: width * 0.93,
    height: width * 0.48,
    borderRadius: 10,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginVertical: height * 0.01,
  },

  heading: {
    ...FONTS.sixHundred,
    fontSize: width * 0.038,
    color: COLORS.black,
    marginBottom: -3,
  },
  subheading: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.03,
    color: COLORS.gray40,
    marginBottom: height * 0.01,
  },
  smallimg: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 6,
    resizeMode: 'stretch',
    marginRight: width * 0.03,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.034,
    ...FONTS.sixHundred,
    color: COLORS.black,
  },
  bluename: {
    fontSize: width * 0.032,
    ...FONTS.sixHundred,
    color: COLORS.primary,
    marginBottom: -3,
  },
  rate: {
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    marginBottom: -4,
  },
  star: {
    width: width * 0.04,
    height: height * 0.02,
    tintColor: '#FDCB0D',
    resizeMode: 'contain',
    marginRight: width * 0.006,
  },

  time: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.032,
    color: '#005C97',
    marginBottom: -3,
    borderRightWidth: 1,
    borderColor: COLORS.gray30,
    width: width * 0.24,
  },
  lesson: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.032,
    color: '#C92C51',
    marginBottom: -3,
    marginLeft: width * 0.06,
  },

  threeicon: {
    width: width * 0.03,
    height: width * 0.03,
    resizeMode: 'contain',
    tintColor: COLORS.white,
    marginHorizontal: width * 0.01,
    marginBottom: -3,
  },
  buybtn: {
    width: width * 0.93,
    alignSelf: 'center',
    marginVertical: height * 0.03,
  },
});
