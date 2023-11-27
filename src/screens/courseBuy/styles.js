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
  logo: {
    width: width * 0.2,
    height: height * 0.08,
    resizeMode: 'contain',
    marginVertical: height * 0.01,
  },
  bgblueBox: {
    backgroundColor: COLORS.lightblue,
    width: width,
    paddingVertical: height * 0.015,
    paddingHorizontal: height * 0.015,
    marginTop: height * 0.004,
  },
  refinputbox: {
    elevation: 5,
    backgroundColor: COLORS.lightblue,
    borderRadius: 14,
    width: width * 0.93,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  icon: {
    width: width * 0.04,
    height: width * 0.04,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  input: {
    width: width * 0.83,
    fontSize: width * 0.032,
    ...FONTS.fourHundred,
    marginBottom: -3,
    paddingLeft: width * 0.03,
    color: COLORS.black,
  },
  subtitle: {
    width: width * 0.76,
    fontSize: width * 0.032,
    ...FONTS.fiveHundred,
    color: COLORS.gray60,
    marginBottom: -3,
  },
  title: {
    color: COLORS.black,
    fontSize: width * 0.036,
    ...FONTS.sixHundred,
    marginBottom: -3,
  },
  price: {
    marginRight: width * 0.03,
    width: width * 0.2,
    textDecorationLine: 'line-through',
  },
  pymtimg: {
    width: width * 0.1,
    height: width * 0.1,
    resizeMode: 'contain',
    marginRight: width * 0.02,
  },
  btn: {
    width: width * 0.93,
    alignSelf: 'center',
    marginTop: height * 0.012,
  },
  dot: {
    width: width * 0.01,
    height: width * 0.01,
    backgroundColor: COLORS.black,
    borderRadius: 20,
    marginRight: width * 0.03,
  },
});
