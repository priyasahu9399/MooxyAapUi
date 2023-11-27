import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  toprow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.94,
    alignSelf: 'center',
    marginVertical: height * 0.008,
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.038,
    ...FONTS.sixHundred,
    marginBottom: -3,
  },
  profile: {
    width: width * 0.2,
    height: width * 0.18,
    resizeMode: 'contain',
    marginVertical: height * 0.01,
  },
  cartBox: {
    width: width * 0.45,
    marginBottom: height * 0.017,
  },
  cartimage: {
    width: width * 0.45,
    height: width * 0.45,
    resizeMode: 'stretch',
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  subheading: {
    fontSize: width * 0.03,
    ...FONTS.sixHundred,
    color: COLORS.gray40,
  },
  carttitle: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: width * 0.034,
    textAlign: 'center',
    // borderWidth: 1,
    // height: height * 0.045,
  },
  cartsubtitle: {
    color: COLORS.gray60,
    ...FONTS.fiveHundred,
    fontSize: width * 0.031,
    marginBottom: -3,
    textAlign: 'center',
  },
  educatrow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.94,
    alignSelf: 'center',
  },
  listbox: {
    elevation: 4,
    backgroundColor: COLORS.white,
    marginVertical: height * 0.01,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listtext: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: width * 0.037,
    marginBottom: -3,
  },
  listtextbox: {
    width: width * 0.332,
    height: height * 0.064,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // // check=========
  // checkbox: {
  //   width: width * 0.066,
  //   height: width * 0.065,
  //   borderWidth: 1,
  //   borderColor: COLORS.gray30,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 3,
  //   marginLeft: width * 0.04,
  // },
  // checkrow: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
});
