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
  },
  title: {
    fontSize: width * 0.036,
    ...FONTS.sixHundred,
    color: COLORS.black,
  },

  checkbox: {
    width: width * 0.066,
    height: width * 0.065,
    borderWidth: 1,
    borderColor: COLORS.gray30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginLeft: width * 0.04,
  },
  checkrow: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginVertical: height * 0.01,
  },
  checktext: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.033,
    marginBottom: -3,
    color: COLORS.black,
    marginLeft: width * 0.024,
    width: width * 0.8,
  },
  bgblueBox: {
    backgroundColor: COLORS.lightblue,
    width: width,
    paddingVertical: height * 0.015,
    paddingHorizontal: height * 0.015,
    marginVertical: height * 0.01,
  },
  btn: {
    width: width * 0.3,
    height: height * 0.05,
    borderRadius: 14,
    marginTop: height * 0.015,
  },
});
