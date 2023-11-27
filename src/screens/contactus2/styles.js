import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    width: width * 0.94,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },

  listbox: {
    width: width * 0.93,
    height: width * 0.3,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf: 'center',
    marginTop: height * 0.012,
    marginLeft: width * 0.3
  },
  listimg: {
    width: width * 0.06,
    height: height * 0.023,
    tintColor: COLORS.white,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: width * 0.015,
  },
  heading: {
    color: COLORS.white,
    fontSize: width * 0.035,
    ...FONTS.sixHundred,
    alignSelf: 'center',
    marginBottom: -3,
    marginTop: height * 0.015,
  },
  listtext: {
    color: COLORS.white,
    fontSize: width * 0.033,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
    marginBottom: -3,
    alignSelf: 'center',
    textAlign: 'center',
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
});
