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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notifyBox: {
    paddingHorizontal: height * 0.01,
    paddingVertical: height * 0.01,
    marginVertical: height * 0.01,
    borderRadius: 10,
    width: width * 0.94,
    alignSelf: 'center',
    backgroundColor:COLORS.primary
  },
  heading: {
    fontSize: width * 0.037,
    ...FONTS.sixHundred,
    color: COLORS.white,
    width: width * 0.62,
  },
  subhead: {
    fontSize: width * 0.033,
    ...FONTS.fourHundred,
    color: COLORS.white,
    marginTop: height * 0.005,
    lineHeight: height * 0.026,
    width: width * 0.794,
    alignSelf: 'flex-end',
  },
  time: {
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
    color: COLORS.white,
    marginBottom: -3,
  },
  notifybox: {
    width: width * 0.07,
    height: width * 0.07,
    backgroundColor: COLORS.white,
    marginRight: width * 0.026,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notify: {
    width: width * 0.055,
    height: width * 0.055,
    resizeMode: 'contain',
  },
  clock: {
    width: width * 0.04,
    height: width * 0.038,
    tintColor: COLORS.white,
    marginRight: width * 0.01,
    resizeMode:'contain'
  },
});
