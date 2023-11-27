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
  addrow: {
    flexDirection: 'row',
    marginTop: height * 0.02,
  },
  heading: {
    fontSize: width * 0.038,
    ...FONTS.sixHundred,
    color: COLORS.black,
    marginBottom: -4,
    backgroundColor: '#F1F5FF',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.025,
    marginVertical: height * 0.01,
  },
  subText: {
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    lineHeight: height * 0.026,
  },
  dot: {
    width: width * 0.013,
    height: width * 0.013,
    backgroundColor: COLORS.black,
    marginRight: width * 0.02,
    borderRadius: 20,
    marginTop: height * 0.01,
  },
  btn: {
    alignSelf: 'center',
    width: width * 0.93,
    marginBottom: height * 0.03,
    height: height * 0.06,
    position: 'absolute',
    top:height * 0.8
  },
  
});
