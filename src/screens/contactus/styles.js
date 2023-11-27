import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    width: width,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    marginTop: height * 0.03,
    borderRadius: 40,
    paddingVertical: height * 0.02,
    elevation: 3,
    marginBottom: height * 0.02,
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.038,
    ...FONTS.sixHundred,
    alignSelf: 'center',
    marginBottom: height * 0.01,
  },
  listbox: {
    width: width * 0.27,
    height: width * 0.27,
    backgroundColor: COLORS.white,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  listimgbox: {
    width: width * 0.13,
    height: width * 0.13,
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  listimg: {
    width: width * 0.08,
    height: height * 0.035,
    tintColor: COLORS.white,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  listtext: {
    color: COLORS.black,
    fontSize: width * 0.035,
    ...FONTS.sixHundred,
    alignSelf: 'center',
    marginBottom: -3,
  },
  listrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: height * 0.02,
  },
  oneImg: {
    width: width * 0.94,
    height: height * 0.3,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  messagebtn: {
    width: width * 0.9,
    alignSelf: 'center',
    marginBottom: height * 0.02,
  },
});
