import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  fileicon: {
    width: width * 0.05,
    height: height * 0.025,
    resizeMode: 'contain',
    marginHorizontal:width * 0.04
  },
  title: {
    marginBottom: -3,
    fontSize: width * 0.032,
    ...FONTS.fiveHundred,
    color: COLORS.black,
  },
  row:{
    flexDirection:'row',
    alignItems: 'center',
    borderWidth:1,
    width: width,
    borderColor: COLORS.gray10,
    paddingVertical:height*.015,
    marginVertical:height*.007
  }
});
