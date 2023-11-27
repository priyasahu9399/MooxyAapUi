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
  noteslist: {
    fontSize: width * 0.035,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    marginVertical:height *.005
  },
});
