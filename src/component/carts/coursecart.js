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

const CourseCart = ({
  bigimg,
  title,
  profileimg,
  name,
  name2,
  time,
  lesson,
  rate,
  onPress,
  graytext
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.bluebox}>
      <Image source={bigimg} style={styles.bigimg} />
      <View>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <View
          style={[
            styles.row,
            {marginTop: height * 0.006, marginBottom: height * 0.009},
          ]}>
          <Image source={profileimg} style={styles.smallimg} />
          <View>
            <Text numberOfLines={1} style={styles.bluename}>
              {name}
            </Text>
            <View style={styles.row}>
              <Text
                numberOfLines={1}
                style={[
                  styles.bluename,
                  {color: '#FE9400', width: width * 0.42},
                ]}>
                {name2}
              </Text>

              <View style={styles.row}>
                <Image source={icons.star} style={styles.star} />
                <Text style={styles.rate}>{rate}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.lesson}>{lesson} Lessons</Text>
        </View>
        {
          graytext &&
        <Text style={styles.graytext}>{graytext}</Text>
        }
      </View>
    </TouchableOpacity>
  );
};

export default CourseCart;

const styles = StyleSheet.create({
  bluebox: {
    backgroundColor: '#F1F5FF',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.015,
    marginVertical: height * 0.01,
    flexDirection: 'row',
    // alignItems: 'center',
  },

  bigimg: {
    width: width * 0.24,
    height: width * 0.24,
    borderRadius: 10,
    resizeMode: 'stretch',
    marginRight: width * 0.04,
  },

  smallimg: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 6,
    resizeMode: 'stretch',
    marginRight: width * 0.02,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.034,
    ...FONTS.sixHundred,
    color: COLORS.black,
  },
  bluename: {
    fontSize: width * 0.032,
    ...FONTS.sixHundred,
    color: COLORS.primary,
    marginBottom: -3,
  },
  rate: {
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    marginBottom: -4,
  },
  star: {
    width: width * 0.04,
    height: height * 0.02,
    tintColor: '#FDCB0D',
    resizeMode: 'contain',
    marginRight: width * 0.006,
  },

  time: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.032,
    color: '#005C97',
    marginBottom: -3,
    borderRightWidth: 1,
    borderColor: COLORS.gray30,
    width: width * 0.24,
  },
  lesson: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.032,
    color: '#C92C51',
    marginBottom: -3,
    marginLeft: width * 0.06,
  },
  graytext: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.032,
    color: COLORS.gray50,
    marginBottom: -3,
    marginTop:height * 0.007
  },
});
