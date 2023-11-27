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
    // height: height*.2
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.044,
    ...FONTS.sixHundred,
    alignSelf: 'center',
    marginTop: height * 0.025,
    marginBottom: height * 0.005
  },
  subheading: {
    color: COLORS.black,
    fontSize: width * 0.033,
    ...FONTS.fiveHundred,
    marginBottom: height * 0.03,
    alignSelf: 'center',
    textAlign: 'center',
    width: width * 0.9
  },
  btn: {
    marginTop: height * 0.03,
    alignSelf: 'center',
    width: width * 0.87,
  },

  subhead2: {
    color: COLORS.gray50,
    fontSize: width * 0.032,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: height * 0.04,
  },
});
