import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  videocustomstyle: {
    alignSelf: 'center',
    marginHorizontal: width * 0.02,
    width: width * 0.94,
    height: height * 0.24,
  },
  videobox: {
    backgroundColor: COLORS.lightblue,
    paddingVertical: height * 0.015,
    marginVertical: height * 0.01,
  },
  videoinnerbox: {
    width: width * 0.94,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
