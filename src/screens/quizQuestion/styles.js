import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightblue,
    flex: 1,
  },
  innercontainer: {
    width: width * 0.94,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    marginVertical: height * 0.1,
    borderRadius: 20,
    elevation: 5,
    height: height * 0.7,
  },

  roundblueboxtext: {
    color: COLORS.primary,
    fontSize: width * 0.034,
    ...FONTS.fiveHundred,
    marginBottom: -3,
  },
  scorebluebox: {
    width: width * 0.28,
    paddingVertical: width * 0.016,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    backgroundColor: COLORS.primary,
  },
  roundbluebox: {
    width: width * 0.12,
    height: width * 0.12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    alignSelf: 'center',
    top: height * -0.03,
  },
  checkrow: {
    backgroundColor: COLORS.white,
    elevation: 5,
    borderRadius: 16,
    paddingVertical: height * 0.015,
    paddingHorizontal: height * 0.015,
    marginBottom: height * 0.008,
    marginTop: height * 0.004,
    width: width * 0.87,
    alignSelf: 'center',
    
  },
  checktext: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.033,
    marginBottom: -3,
    color: COLORS.black,
    marginHorizontal: width * 0.02,
    width: width * 0.66,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.04,
    paddingHorizontal: width * 0.03,
    marginBottom: height * 0.03,
  },
  yarrow: {
    width: width * 0.14,
    height: width * 0.14,
    resizeMode: 'contain',
  },
  yarrowbox: {
    position: 'absolute',
    top: height * 0.765,
    zIndex: 111,
    alignSelf: 'center',
  },
  pillbg: {
    width: width * 0.1,
    height: width * 0.02,
    backgroundColor: COLORS.gray20,
    borderRadius: 20,
    marginHorizontal:width * 0.01
  },
  pillrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.02,
  },
});
