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
  },
  img: {
    width: width * 0.6,
    height: height * 0.13,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: height * 0.01,
  },
  blueheading: {
    fontSize: width * 0.038,
    ...FONTS.sixHundred,
    color: COLORS.primary,
  },
  heading: {
    fontSize: width * 0.038,
    ...FONTS.sixHundred,
    color: COLORS.black,
    marginBottom: -4,
    marginVertical: height * 0.012,
  },
  subText: {
    fontSize: width * 0.033,
    ...FONTS.fourHundred,
    color: COLORS.black,
    marginTop: height * 0.01,
  },
  numGraytext: {
    fontSize: width * 0.035,
    ...FONTS.sixHundred,
    color: COLORS.gray40,
    marginBottom: -3,
    marginTop: height * 0.012,
  },
  bluenumtext: {
    fontSize: width * 0.034,
    ...FONTS.sixHundred,
    color: COLORS.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowicon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bgblueBox: {
    backgroundColor: '#F1F5FF',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.01,
    marginVertical: height * 0.01,
  },
  icons: {
    width: width * 0.1,
    height: height * 0.05,
    resizeMode: 'contain',
    marginRight: width * 0.03,
  },
  // dot: {
  //   width: width * 0.013,
  //   height: width * 0.013,
  //   backgroundColor: COLORS.black,
  //   marginRight: width * 0.02,
  //   borderRadius: 20,
  //   marginTop: height * 0.01,
  // },
  // btn: {
  //   alignSelf: 'center',
  //   width: width * 0.93,
  //   marginBottom: height * 0.03,
  //   height: height * 0.06,
  //   position: 'absolute',
  //   top: height * 0.8,
  // },
});
