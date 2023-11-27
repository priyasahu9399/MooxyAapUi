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
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  title: {
    fontSize: width * 0.035,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    marginBottom:height * 0.007
  },
  subtitle: {
    fontSize: width * 0.032,
    ...FONTS.fiveHundred,
    color: COLORS.gray60,
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.037,
    ...FONTS.sixHundred,
    marginTop: height * 0.01,
    marginLeft: width * 0.04
  },
  
});

