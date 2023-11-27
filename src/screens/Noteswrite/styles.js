import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    backgroundColor: COLORS.white,
    width: width * 0.94,
    alignSelf: 'center',
    height: height,
  },


  subText: {
    fontSize: width * 0.035,
    ...FONTS.fiveHundred,
    color: COLORS.black,
  },
  oneimg: {
    width: width * 0.7,
    height: width * 0.7,
    resizeMode:'stretch',
    alignSelf:'center',
    marginTop: height * 0.02
  },
 
});
