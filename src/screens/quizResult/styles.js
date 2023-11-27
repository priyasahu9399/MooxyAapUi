import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightblue,
    flex: 1,
  },
  innercontainer: {
    width: width * 0.9,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    marginVertical: height * 0.04,
    borderRadius: 50,
    elevation: 5,
    height: height * 0.4,
    paddingVertical: height * 0.02,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.031,
    justifyContent: 'space-between',
    marginHorizontal: width * 0.06,
  },
  ImageBackground: {
    width: width,
    height: height,
    resizeMode: 'stretch',
    overflow: 'hidden',
  },
  profilebox: {
    width: width * 0.24,
    height: width * 0.24,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    marginBottom: height * 0.006,
    marginTop: height * 0.04,
    borderWidth: 4,
    elevation: 4,
    borderColor: COLORS.white,
  },
  profile: {
    width: width * 0.22,
    height: width * 0.22,
    resizeMode: 'stretch',
    borderRadius: 90,
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.034,
    ...FONTS.sixHundred,
    alignSelf: 'center',
  },
  subhead: {
    color: COLORS.black,
    fontSize: width * 0.032,
    ...FONTS.sixHundred,
    marginTop: height * 0.02,
    alignSelf: 'center',
  },
  text: {
    color: COLORS.black,
    fontSize: width * 0.032,
    ...FONTS.fourHundred,
  },
  sadicon: {
    width: width * 0.2,
    height: height * 0.1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  // roundbluebox: {
  //   width: width * 0.12,
  //   height: width * 0.12,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 80,
  //   backgroundColor: COLORS.primary,
  //   position: 'absolute',
  //   alignSelf: 'center',
  //   top: height * -0.03,
  // },
  // checkrow: {
  //   backgroundColor: COLORS.white,
  //   elevation: 5,
  //   borderRadius: 16,
  //   paddingVertical: height * 0.015,
  //   paddingHorizontal: height * 0.015,
  //   marginBottom: height * 0.008,
  //   marginTop: height * 0.004,
  //   width: width * 0.87,
  //   alignSelf: 'center',

  // },
  // checktext: {
  //   ...FONTS.fiveHundred,
  //   fontSize: width * 0.033,
  //   marginBottom: -3,
  //   color: COLORS.black,
  //   marginHorizontal: width * 0.02,
  //   width: width * 0.66,
  // },
});
