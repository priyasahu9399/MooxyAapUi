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
  profilebox: {
    width: width * 0.15,
    height: width * 0.15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    borderWidth: 5,
    borderColor: COLORS.white,
    elevation: 8,
    backgroundColor: COLORS.white,
  },
  profile: {
    width: width * 0.13,
    height: width * 0.13,
    resizeMode: 'stretch',
    borderRadius: 90,
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.038,
    ...FONTS.sixHundred,
    marginBottom: -3,
  },
  subheading: {
    fontSize: width * 0.03,
    ...FONTS.sixHundred,
    color: COLORS.gray40,
  },
  listbox: {
    elevation: 4,
    backgroundColor: COLORS.white,
    paddingVertical: height * 0.008,
    paddingHorizontal: height * 0.02,
    borderRadius: 6,
    marginBottom: height * 0.01,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: height * 0.01,
  },
  listboxtext: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: width * 0.031,
    marginBottom: -3,
  },
  // check=========
  checkbox: {
    width: width * 0.066,
    height: width * 0.065,
    borderWidth: 1,
    borderColor: COLORS.gray30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginLeft: width * 0.04,
  },
  checkrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checktext: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.033,
    marginBottom: -3,
    color: COLORS.black,
    marginLeft: width * 0.02,
  },
  // -------------
  referimg: {
    width: width * 0.4,
    height: height * 0.13,
    resizeMode: 'stretch',
    marginRight: width * 0.04,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
  },

  refertitle: {
    ...FONTS.sixHundred,
    fontSize: width * 0.035,
    color: COLORS.black,
    marginTop: height * 0.01,
  },
  referrupe: {
    ...FONTS.sixHundred,
    fontSize: width * 0.032,
    marginBottom: -3,
    color: COLORS.primary,
    marginBottom: height * 0.01,
  },
  coursetypebox: {
    borderWidth: 1,
    borderColor: COLORS.gray10,
    borderRadius: 12,
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: height * 0.015,
    width: width * 0.93,
    alignSelf: 'center',
    paddingVertical:height * 0.01
  },

  // ----------------modal--------------
  cross: {
    width: width * 0.056,
    height: height * 0.03,
    resizeMode: 'contain',
    marginRight: width * 0.03,
    tintColor: COLORS.white,
  },
  modalblueBox: {
    backgroundColor: COLORS.primary,
    width: width * 0.96,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.05,
    alignSelf: 'center',
    borderRadius:12
  },
  modaltitle: {
    ...FONTS.sixHundred,
    fontSize: width * 0.035,
    color: COLORS.white,
  },
  modalsubtitle: {
    ...FONTS.sixHundred,
    fontSize: width * 0.031,
    color: COLORS.white,
    marginBottom:-3
  },
});
