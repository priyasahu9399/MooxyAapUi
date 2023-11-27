import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  title: {
    fontSize: width * 0.036,
    ...FONTS.sixHundred,
    color: COLORS.white,
  },
  subtitle: {
    fontSize: width * 0.031,
    ...FONTS.fiveHundred,
    color: COLORS.white,
    marginTop: height * 0.01,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.03,
    justifyContent: 'space-around',
  },
  borderbtn: {
    width: width * 0.42,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    height: height * 0.05,
    elevation:1
  },
  ratebox: {
    width: width * 0.93,
    marginTop: height * 0.26,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1.6,
    alignSelf: 'center',
  },
  ratebluebox: {
    width: width * 0.922,
    marginBottom: height * 0.03,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.03,
  },
  star: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
    tintColor: COLORS.gray30,
  },
});
