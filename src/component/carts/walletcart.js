import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import {data} from './../../constants';

const {width, height} = Dimensions.get('window');

const WalletCart = ({app, refer, transId, Amount,total, summary}) => {
  return (
    <View style={styles.transactionBox}>
      <Text style={styles.redText}>{app}</Text>
      <View>
        <View style={styles.row}>
          <Text style={styles.heading}>Reference:</Text>
          <Text style={styles.subHeading}>{refer}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.heading}>Transaction Id:</Text>
          <Text style={styles.subHeading}>{transId}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.heading}>Amount:</Text>
          <Text style={styles.subHeading}>₹ {Amount}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.heading}>Summary:</Text>
          <Text style={styles.subHeading}>{summary}</Text>
        </View>
      </View>

      <View style={styles.btn}>
        <Text style={styles.btntext}>- ₹{total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionBox: {
    backgroundColor: '#e1e7f5',
    marginVertical: height * 0.01,
    width: width * 0.93,
    alignSelf: 'center',
  },
  redText: {
    color: '#F7861C',
    alignSelf: 'flex-end',
    ...FONTS.fiveHundred,
    fontSize: width * 0.03,
    margin: width * 0.03,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.013,
  },
  heading: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: width * 0.03,
    width: width * 0.37,
  },
  subHeading: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: width * 0.028,
  },
  btntext: {
    color: COLORS.white,
    ...FONTS.fiveHundred,
    fontSize: width * 0.03,
  },
  btn: {
    backgroundColor: COLORS.primary,
    padding: width * 0.03,
    alignItems: 'center',
    marginTop: height * 0.02,
  },
});
export default WalletCart;
