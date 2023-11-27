import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  bgblueBox: {
    backgroundColor: COLORS.lightblue,
    width: width,
    paddingVertical: height * 0.015,
    paddingHorizontal: height * 0.015,
    marginTop: height * 0.004,
  },
  box3: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    textAlign: 'center',
  },
  resend: {
    fontSize: width * 0.032,
    ...FONTS.sixHundred,
    color: COLORS.gray50,
  },
  time: {
    fontSize: width * 0.032,
    ...FONTS.sixHundred,
    color: COLORS.primary,
    marginLeft: width * 0.02,
  },

  otpCheck: {
    width: width * 0.62,
    height: height * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  underlineStyleBase: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: 12,
    color: COLORS.black,
    fontFamily: FONTS.semiBold,
    backgroundColor: COLORS.lightblue,
    elevation: 6,
    fontSize: width * 0.04,
    paddingBottom: width * 0.015,
    borderWidth: 0,
  },
  resent: {
    color: COLORS.primary,
    textDecorationLine: 'underline',
    fontSize: width * 0.034,
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
  // heading: {
  //   color: COLORS.black,
  //   fontSize: width * 0.044,
  //   ...FONTS.sixHundred,
  //   alignSelf: 'center',
  //   marginTop: height * 0.02,
  // },
  subheading: {
    color: COLORS.black,
    fontSize: width * 0.034,
    ...FONTS.sixHundred,
    alignSelf: 'center',
    textAlign: 'center',
  },
  btn: {
    marginTop: height * 0.02,
    alignSelf: 'center',
    width: width * 0.93,
  },
});
