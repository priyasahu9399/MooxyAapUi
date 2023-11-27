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
    marginVertical: height * 0.024,
  },

  title: {
    fontSize: width * 0.034,
    ...FONTS.fiveHundred,
    color: COLORS.primary,
    width: width * 0.72,
  },
  subtitle: {
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
    color: COLORS.gray50,
    marginBottom: -4,
    width: width * 0.72,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.93,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: width * 0.039,
    ...FONTS.sixHundred,
    color: COLORS.black,
    width: width * 0.44,
    marginBottom: height * 0.008,
  },
  community: {
    width: width * 0.4,
    height: height * 0.15,
    resizeMode: 'contain',
  },

  personbox: {
    width: width * 0.11,
    height: width * 0.11,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.white,
  },
  person: {
    width: width * 0.1,
    height: width * 0.1,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  star: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
    tintColor: COLORS.gray30,
  },
  arrow: {
    width: width * 0.034,
    height: width * 0.034,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
});
