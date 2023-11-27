import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  profile: {
    width: width * 0.2,
    height: width * 0.2,
    resizeMode: 'contain',
    marginVertical: height * 0.01,
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.038,
    ...FONTS.sixHundred,
    marginBottom: height * 0.005,
  },
  subheading: {
    fontSize: width * 0.032,
    ...FONTS.sixHundred,
    color: COLORS.black,
  },

  // check=========
  checkbox: {
    width: width * 0.066,
    height: width * 0.065,
    borderWidth: 2,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginLeft: width * 0.04,
  },

  // cart-----------------
  bluebox: {
    backgroundColor: COLORS.lightblue,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.015,
    marginVertical: height * 0.01,
    flexDirection: 'row',
    // alignItems: 'center',
  },

  bigimg: {
    width: width * 0.24,
    height: width * 0.24,
    borderRadius: 10,
    resizeMode: 'stretch',
    marginRight: width * 0.04,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.034,
    ...FONTS.sixHundred,
    color: COLORS.black,
    height: height * 0.044,
    width: width * 0.65,
  },
  pinktext: {
    fontSize: width * 0.036,
    ...FONTS.sixHundred,
    color: '#C92C51',
    width: width * 0.5,
  },

  time: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.032,
    color: COLORS.primary,
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

  refinputbox: {
    elevation: 5,
    backgroundColor: COLORS.white,
    borderRadius: 14,
    width: width * 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: height * 0.006,
  },
  icon: {
    width: width * 0.045,
    height: width * 0.045,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  input: {
    width: width * 0.4,
    fontSize: width * 0.032,
    ...FONTS.fourHundred,
    marginBottom: -3,
    paddingLeft: width * 0.03,
  },
});
