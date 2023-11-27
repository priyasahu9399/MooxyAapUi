import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');

const OrderCart = ({course , date , oNo , total , status}) => {
  return (
    <View style={styles.mainbox}>
      <View style={styles.listrow}>
        <Text style={styles.heading}>Course:</Text>
        <Text style={[styles.bluetext, {color: COLORS.primary}]}>
          {course}
        </Text>
      </View>
      <View style={styles.listrow}>
        <Text style={styles.heading}>Date:</Text>
        <Text style={styles.bluetext}>{date}</Text>
      </View>
      <View style={styles.listrow}>
        <Text style={styles.heading}>Order Number:</Text>
        <Text style={styles.bluetext}>{oNo}</Text>
      </View>
      <View style={styles.listrow}>
        <Text style={styles.heading}>Total:</Text>
        <Text style={[styles.bluetext, {color: COLORS.primary}]}>Rs{total}</Text>
      </View>
      <View style={styles.listrow}>
        <Text style={[styles.heading, {color: '#199804'}]}>Status:</Text>
        <Text style={[styles.bluetext, {color: '#199804'}]}>
{status}        </Text>
      </View>
    </View>
  );
};

export default OrderCart;

const styles = StyleSheet.create({
  mainbox: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: COLORS.primary,
    paddingHorizontal: width * 0.03,
    marginVertical: height * 0.01,
    paddingVertical: height * 0.01
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.036,
    ...FONTS.sevenHundred,
  },
  bluetext: {
    color: COLORS.black,
    fontSize: width * 0.035,
    ...FONTS.sixHundred,
    marginLeft: width * 0.01,
  },
  listrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.005,
  },
});
