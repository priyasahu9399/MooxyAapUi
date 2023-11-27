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

const CourseBuyCart = ({img, title, time, date, onPress , onPressChange}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.cartBox}>
      <Image source={img} style={styles.cartimg} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{time}</Text>
        <Text style={styles.subtitle}>{date}</Text>
        <TouchableOpacity
          onPress={onPressChange}
          style={{alignSelf: 'flex-end'}}>
          <Text style={styles.bluetext}>Change Course</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CourseBuyCart;

const styles = StyleSheet.create({
  cartBox: {
    backgroundColor: COLORS.lightblue,
    width: width,
    paddingVertical: height * 0.015,
    paddingHorizontal: height * 0.015,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.012,
  },
  title: {
    color: COLORS.black,
    fontSize: width * 0.038,
    ...FONTS.sixHundred,
    marginBottom: -3,
  },
  subtitle: {
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
    color: COLORS.gray40,
    width: width * 0.68,
    marginVertical: height * 0.001,
  },
  cartimg: {
    width: width * 0.22,
    height: width * 0.22,
    resizeMode: 'stretch',
    marginRight: width * 0.03,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  bluetext: {
    color: COLORS.primary,
    textAlign: 'right',
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
    color: COLORS.primary,
  },
});
