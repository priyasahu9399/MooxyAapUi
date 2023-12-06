import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  drawbg: {
    height: height,
    // width: width * 0.84,
    resizeMode: 'stretch',
    paddingBottom: height * 0.1,
  },
  logobox: {
    width: width * 0.24,
    borderWidth: 3,
    height: width * 0.24,
    borderRadius: 80,
    borderColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width * 0.09,
    marginVertical: height * 0.015,
  },
  logo: {
    width: width * 0.225,
    height: width * 0.225,
    resizeMode: 'stretch',
    borderRadius: 80,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: height * 0.02,
  },
  cross: {
    width: width * 0.056,
    height: height * 0.03,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginRight: width * 0.05,
    marginTop: height * 0.04,
    tintColor: COLORS.white,
  },

  bottomcross: {
    width: width * 0.056,
    height: height * 0.03,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginRight: width * 0.02,
    // marginBottom: height * 0.01,
    tintColor: COLORS.primary,
  },
  collapsbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.028,
  },
  collapsimg: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
    marginHorizontal: width * 0.04,
    tintColor: COLORS.white,
  },
  collapstitle: {
    ...FONTS.fiveHundred,
    color: COLORS.white,
    fontSize: width * 0.034,
    marginBottom: -4,
  },
  title: {
    ...FONTS.sixHundred,
    color: COLORS.white,
    fontSize: width * 0.035,
  },
  idea: {
    marginBottom: height * 0.3,
    height: height * 0.25,
    width: width * 0.5,
    alignSelf: 'flex-end',
    resizeMode: 'stretch',
    marginTop: height * -0.05,
    // marginRight:width*.1
  },
  borderbtn: {
    width: width * 0.34,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    height: height * 0.05,
    elevation: 1,
  },
  bottombox: {
    backgroundColor: COLORS.white,
    paddingHorizontal: width * 0.03,
    width: width * 0.84,
  },
});
