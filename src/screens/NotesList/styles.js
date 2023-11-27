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
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  noteslist: {
    fontSize: width * 0.035,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    marginVertical: height * 0.005,
  },
  arrow: {
    width: width * 0.034,
    height: width * 0.034,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
});
