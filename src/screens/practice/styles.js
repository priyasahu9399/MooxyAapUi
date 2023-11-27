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
    paddingHorizontal: height * 0.02,
    marginTop: height * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.035,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    width: width * 0.64,
    marginHorizontal: width * 0.03,
  },
  subtitle: {
    fontSize: width * 0.032,
    ...FONTS.fiveHundred,
    color: COLORS.gray40,
    width: width * 0.64,
    marginHorizontal: width * 0.03,
    marginBottom: -3,
  },

  toprow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.94,
    alignSelf: 'center',
    marginVertical: height * 0.008,
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.037,
    ...FONTS.sixHundred,
    marginBottom: -3,
  },
  headingrow: {
    color: COLORS.black,
    fontSize: width * 0.038,
    ...FONTS.sixHundred,
    width: width * 0.53,
  },
  subtext: {
    color: COLORS.black,
    fontSize: width * 0.032,
    ...FONTS.fiveHundred,
    width: width * 0.53,
    marginVertical:height * 0.002
  },
  community: {
    width: width * 0.4,
    height: height * 0.16,
    resizeMode: 'stretch',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.94,
    alignSelf: 'center',
  },
  btn: {
    width: width * 0.4,
    marginVertical: height * 0.014,
    marginLeft: width * 0.03,
  },
});

