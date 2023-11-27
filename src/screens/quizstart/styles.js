import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  title: {
    fontSize: width * 0.034,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    marginTop: height * 0.55,
    width: width * 0.9,
    alignSelf: 'center',
    textAlign: 'center',
  },
  oneimg: {
    width: width,
    height: height,
  },
  btn: {
    width: width * 0.93,
    alignSelf: 'center',
    marginTop: height * 0.04,
  },
});
