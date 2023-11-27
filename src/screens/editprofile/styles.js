import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    width: width * 0.95,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    marginTop: height * -0.08,
    borderRadius: 30,
    paddingVertical: height * 0.02,
    elevation: 3,
    marginBottom: height * 0.02,
  },
  ImageBackground: {
    width: width,
    height: height * 0.36,
    resizeMode: 'stretch',
    overflow: 'hidden',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  profilebox: {
    width: width * 0.28,
    height: width * 0.28,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    marginBottom: height * 0.012,
    marginTop: height * 0.03,
    borderWidth: 3,
    borderColor: COLORS.white,
  },
  profile: {
    width: width * 0.26,
    height: width * 0.26,
    resizeMode: 'stretch',
    borderRadius: 90,
  },
  heading: {
    color: COLORS.white,
    fontSize: width * 0.04,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
    marginBottom: -3,
  },
  edit: {
    color: COLORS.white,
    fontSize: width * 0.03,
    ...FONTS.fourHundred,
    alignSelf: 'center',
    marginBottom: height * 0.03,
  },
  camera: {
    width: width * 0.06,
    height: height * 0.03,
    tintColor: COLORS.black,
    resizeMode: 'contain',
    position: 'absolute',
    top: height * 0.12,
    left: width * 0.58,
  },
});
