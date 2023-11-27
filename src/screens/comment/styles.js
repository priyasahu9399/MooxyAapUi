import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.01,
    marginBottom: height * 0.003,
  },
  innercontainer: {
    alignSelf: 'center',
    width: width * 0.94,
    backgroundColor: COLORS.white,
  },

  heading: {
    fontSize: width * 0.034,
    ...FONTS.sixHundred,
    color: COLORS.black,
    marginBottom: -3,
  },
  subtitle: {
    fontSize: width * 0.032,
    ...FONTS.fourHundred,
    color: COLORS.black,
    marginBottom: -2,
  },
  graytext: {
    fontSize: width * 0.03,
    ...FONTS.sixHundred,
    color: COLORS.gray60,
    marginBottom: -2,
    width: width * 0.18,
  },
  bgbluebox: {
    backgroundColor: COLORS.lightblue,
    paddingVertical: height * 0.008,
    paddingHorizontal: height * 0.01,
    borderWidth: 1,
    borderColor: '#E4E4E4',
    borderRadius: 14,
    marginLeft: width * 0.02,
    width: width * 0.32,
  },

  person: {
    width: width * 0.09,
    height: width * 0.09,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  arrow: {
    width: width * 0.04,
    height: width * 0.04,
    resizeMode: 'contain',
    marginLeft: width * 0.02,
  },

  //  chat row -------

  inputrow: {
    marginBottom: height * 0.02,
    marginTop: height * 0.01,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputbox: {
    borderWidth: 1,
    width: width * 0.8,
    borderRadius: 22,
    borderColor: COLORS.gray10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.02,
    marginLeft: width * 0.02,
  },
  inputtext: {
    ...FONTS.fourHundred,
    fontSize: width * 0.032,
    marginBottom: -3,
    width: width * 0.56,
    marginHorizontal: width * 0.01,
    color: COLORS.black,
  },
  smileiconbox: {
    width: width * 0.092,
    height: width * 0.09,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.primary,
  },
  smileicon: {
    width: width * 0.06,
    height: height * 0.03,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  fileattach2: {
    width: width * 0.09,
    height: height * 0.045,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  sendimg: {
    width: width * 0.11,
    height: width * 0.11,
    resizeMode: 'contain',
    marginHorizontal: width * 0.03,
  },
  iconrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  threeicon: {
    width: width * 0.045,
    height: width * 0.045,
    resizeMode: 'contain',
    tintColor: COLORS.white,
    marginLeft:width * 0.03
  },
  threeicontext: {
    fontSize: width * 0.032,
    ...FONTS.fiveHundred,
    color: COLORS.white,
    marginBottom: -3,
    marginLeft: width * 0.02,
    marginRight: width * 0.03
  },
});
