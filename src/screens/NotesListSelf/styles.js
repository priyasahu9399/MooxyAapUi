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
    paddingVertical: height * 0.018,
    paddingHorizontal: height * 0.02,
    marginTop: height * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.035,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    width:width*.73,
    marginHorizontal:width*.03,
    marginBottom:-3
  },
  
  img: {
    width: width * 0.064,
    height: width * 0.064,
    resizeMode: 'stretch',
    tintColor: COLORS.primary,
  },
  
});
