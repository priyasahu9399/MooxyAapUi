import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  title: {
    color: COLORS.primary,
    alignSelf: 'center',
    ...FONTS.sevenHundred,
    fontSize: width * 0.05,
    textAlign: 'center',
    width: width * 0.4,
    marginTop: height * 0.63,
    marginBottom: height * 0.006,
  },
  subtitle: {
    color: COLORS.black,
    alignSelf: 'center',
    ...FONTS.fiveHundred,
    fontSize: width * 0.032,
    textAlign: 'center',
    width: width * 0.9,
    marginBottom: height * 0.01,
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
  skip: {
    color: COLORS.primary,
    ...FONTS.fiveHundred,
    fontSize: width * 0.035,
    alignSelf: 'flex-end',
    marginTop: height * 0.025,
  },
  dot_box: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: height * 0.06,
  },
  dot: {
    backgroundColor: COLORS.gray40,
    width: width * 0.023,
    height: width * 0.023,
    borderRadius: 20,
    marginRight: width * 0.02,
  },
});
