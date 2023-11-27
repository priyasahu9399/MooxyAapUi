import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  firstbox: {
    backgroundColor: '#e1e7f5',
    width: width,
    alignSelf: 'center',
    paddingHorizontal: width * 0.04,
    marginVertical: height * 0.012,
    paddingVertical: height * 0.018,
  },
  profilebox: {
    width: width * 0.28,
    height: width * 0.28,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    marginBottom: height * 0.01,
    borderWidth: 5,
    borderColor: COLORS.white,
  },
  profile: {
    width: width * 0.25,
    height: width * 0.25,
    resizeMode: 'stretch',
    borderRadius: 90,
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.04,
    ...FONTS.sixHundred,
    alignSelf: 'center',
    marginBottom: -3,
  },
  camera: {
    width: width * 0.06,
    height: height * 0.03,
    tintColor: COLORS.black,
    resizeMode: 'contain',
    position: 'absolute',
    top: height * 0.09,
    left: width * 0.55,
  },

  rowyellowbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.04,
    backgroundColor: 'rgb(254, 187,53)',
    elevation: 3,
    borderRadius: 12,
    marginVertical: height * 0.02,
  },
  pinktext: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.035,
    color: COLORS.black,
    marginBottom: -3,
  },
  btnrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalbox: {
    backgroundColor: COLORS.white,
    width: width * 0.93,
    alignSelf: 'center',
    paddingVertical: height * 0.03,
    borderRadius: 10,
  },
  modalborder: {
    borderBottomWidth: 2,
    borderColor: COLORS.lightblue,
    paddingBottom:height * 0.014,
    marginBottom:height * 0.03
    
  },
  cross: {
    width: width * 0.064,
    height: height * 0.032,
    marginRight: width * 0.03,
    resizeMode:'contain',
    tintColor:COLORS.black
  },
});
