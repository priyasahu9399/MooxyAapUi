import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  heading: {
    fontSize: width * 0.036,
    ...FONTS.sixHundred,
    color: COLORS.black,
    marginVertical: height * 0.01,
    marginBottom: -3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderdot: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: COLORS.primary,
    paddingVertical: height * 0.014,
    paddingHorizontal: height * 0.014,
    justifyContent: 'space-between',
    borderRadius: 8,
    marginVertical: height * 0.02,
  },
  gift: {
    width: width * 0.35,
    height: height * 0.16,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginVertical: height * 0.02,
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
    backgroundColor: COLORS.white,
    borderRadius: 14,
    width: width * 0.93,
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
    width: width * 0.83,
    fontSize: width * 0.032,
    ...FONTS.fourHundred,
    marginBottom: -3,
    paddingLeft: width * 0.03,
    color: COLORS.black,
  },
  button: {
    width: width * 0.2,
    height: height * 0.05,
  },
});
