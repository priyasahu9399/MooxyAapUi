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
import * as Progress from 'react-native-progress';

const {width, height} = Dimensions.get('window');

const CourseVideo = ({title, time, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cartBox}>
      <Image source={icons.video} style={styles.cartimg} />
      <View style={{width: width * 0.72, marginHorizontal: width * 0.025}}>
        <Text style={styles.carttitle}>{title}</Text>
        <Text style={styles.carttime}>{time}</Text>
        <Progress.Bar
          progress={.8}
          width={width * 0.68}
          height={height * 0.005}
          borderRadius={12}
          borderColor={COLORS.gray10}
          color={COLORS.gray20}
          indeterminate={false}
          unfilledColor={COLORS.gray10}
        />
      </View>
      <Image source={icons.lock} style={styles.lock} />
    </TouchableOpacity>
  );
};

export default CourseVideo;

const styles = StyleSheet.create({
  cartBox: {
    backgroundColor: COLORS.lightblue,
    width: width,
    paddingVertical: height * 0.02,
    paddingHorizontal: height * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.012,
  },
  cartimg: {
    width: width * 0.1,
    height: width * 0.1,
    resizeMode: 'contain',
  },
  carttitle: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.033,
    color: COLORS.black,
    marginBottom: -3,
  },
  carttime: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.03,
    color: COLORS.gray30,
    marginVertical: height * 0.004
  },
  lock: {
    width: width * 0.055,
    height: width * 0.055,
    resizeMode: 'contain',
  },
});
