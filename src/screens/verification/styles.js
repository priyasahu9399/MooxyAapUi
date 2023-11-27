import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  innercontainer: {
    width: width * 0.94,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    marginVertical: height * 0.05,
    borderRadius: 20,
    height: height * 0.88,
  },

  box3: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: height * 0.05,
    alignSelf: 'center',
    textAlign: 'center',
  },
  resend: {
    fontSize: width * 0.031,
    fontFamily: FONTS.medium,
    color: COLORS.gray70,
  },
  time: {
    fontSize: width * 0.031,
    fontFamily: FONTS.medium,
    color: COLORS.primary,
    marginLeft: width * 0.02,
  },

  otpCheck: {
    width: width * 0.68,
    height: height * 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  underlineStyleBase: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: 12,
    color: COLORS.black,
    fontFamily: FONTS.semiBold,
    backgroundColor: COLORS.white,
    elevation: 4,
    fontSize: width * 0.04,
    paddingBottom: width * 0.015,
    borderWidth: 0,
    // paddingBottom: -0.1,
  },
  resent: {
    color: COLORS.primary,
    textDecorationLine: 'underline',
    fontSize: 14,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
    textAlign: 'center',
  },
  login: {
    width: width * 0.9,
    height: height * 0.36,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: height * 0.04,
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.044,
    ...FONTS.sixHundred,
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  subheading: {
    color: COLORS.black,
    fontSize: width * 0.032,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
    textAlign: 'center',
  },
  btn: {
    marginTop: height * 0.02,
    alignSelf: 'center',
    width: width * 0.87,
  },
});
