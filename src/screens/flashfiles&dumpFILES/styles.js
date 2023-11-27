import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  fileicon: {
    width: width * 0.06,
    height: height * 0.027,
    resizeMode: 'contain',
    marginHorizontal: width * 0.04,
  },
  title: {
    marginBottom: -3,
    fontSize: width * 0.032,
    ...FONTS.fiveHundred,
    color: COLORS.black,
  },
  row: {
    flexDirection: 'row',
    borderWidth: 1,
    width: width,
    borderColor: COLORS.gray10,
    paddingVertical: height * 0.017,
    marginVertical: height * 0.007,
    backgroundColor: '#F1F5FF',
  },
  rowred: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.46,
    paddingVertical: height * 0.008,
    marginTop: height * 0.01,
    backgroundColor: '#C92C51',
    borderRadius: 10,
  },
  attach: {
    width: width * 0.05,
    height: height * 0.025,
    resizeMode: 'contain',
    marginHorizontal: width * 0.02,
  },
  attachfiletext: {
    marginBottom: -3,
    fontSize: width * 0.032,
    ...FONTS.fiveHundred,
    color: COLORS.white,
  },
  threeicon: {
    width: width * 0.03,
    height: width * 0.03,
    resizeMode: 'contain',
    tintColor: COLORS.white,
    marginHorizontal: width * 0.01,
  },
  heading: {
    ...FONTS.sixHundred,
    fontSize: width * 0.034,
    color: COLORS.white,
    marginBottom: -1,
  },
  headrow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap:'wrap',
  },
  
});
