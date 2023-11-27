import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  fileicon: {
    marginHorizontal: width * 0.02,
    color: COLORS.primary,
  },
  title: {
    marginBottom: -3,
    fontSize: width * 0.04,
    ...FONTS.sixHundred,
    color: COLORS.black,
    marginLeft: width * 0.04,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: width,
    borderColor: COLORS.gray10,
    paddingVertical: height * 0.018,
    marginTop: height * 0.01,
    height: height * 0.08,
  },
  heading: {
    fontSize: width * 0.033,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    marginBottom: -4,
    width: width * 0.8,
  },
  subText: {
    fontSize: width * 0.033,
    ...FONTS.fourHundred,
    color: COLORS.black,
    marginBottom: height * 0.02,
  },
  img: {
    width: width * 0.6,
    height: height * 0.14,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical:height*.02
  },
});
