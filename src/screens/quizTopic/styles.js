import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightblue,
    flex: 1,
  },
  innercontainer: {
    width: width * 0.94,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    marginVertical: height * 0.12,
    borderRadius: 20,
    elevation: 5,
  },
  heading: {
    color: COLORS.primary,
    fontSize: width * 0.042,
    ...FONTS.sixHundred,
    alignSelf: 'center',
    marginTop: height * 0.025,
  },
  subheading: {
    color: COLORS.black,
    fontSize: width * 0.034,
    ...FONTS.fourHundred,
    alignSelf: 'center',
    marginBottom: height * 0.07,
  },

  // checkbox
  checkbox: {
    width: width * 0.066,
    height: width * 0.065,
    borderWidth: 1,
    borderColor: COLORS.gray30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  checkrow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    elevation: 5,
    borderRadius: 16,
    paddingVertical: height * 0.015,
    paddingHorizontal: height * 0.015,
    marginBottom: height * 0.008,
    marginTop: height * 0.004,
    width: width * 0.89,
    alignSelf: 'center',
  },
  checktext: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.033,
    marginBottom: -3,
    color: COLORS.black,
    marginHorizontal: width * 0.02,
    width: width * 0.66,
  },
  lock: {
    width: width * 0.057,
    height: height * 0.03,
    resizeMode: 'contain',
    tintColor: COLORS.gray60,
  },
  lockactive: {
    width: width * 0.05,
    height: height * 0.025,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  yarrow: {
    width: width * 0.14,
    height: width * 0.14,
    resizeMode: 'contain',
  },
  yarrowbox: {
    position: 'absolute',
    top: height * 0.765,
    zIndex: 111,
    alignSelf: 'center',
  },
});
