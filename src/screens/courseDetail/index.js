import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import styles from './styles';
import {icons, images} from './../../constants';
import {data} from './../../constants';
import {YellowBtn} from './../../component/Button/index';
import CourseVideo from './../../component/carts/coursevideocart';

const {width, height} = Dimensions.get('window');
const CourseDetail = ({navigation, route}) => {
  const title = route.params;

  navigation.setOptions({
    headerTitle: () => (
      <View style={styles.row}>
        <Text style={[styles.heading, {color: COLORS.white}]}>Course</Text>
        <Image
          source={icons.rarrow}
          resizeMode="contain"
          style={styles.threeicon}
        />
        <Text style={[styles.heading, {color: COLORS.white, marginBottom: -5}]}>
          {title}
        </Text>
      </View>
    ),
  });
  
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={{width: width * 0.93, alignSelf: 'center'}}>
        <Image source={images.course2} style={styles.oneimg} />

        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <Text style={styles.heading}>Hardware Repair</Text>
          <Text
            style={[
              styles.lesson,
              {...FONTS.sixHundred, fontSize: width * 0.037},
            ]}>
            Rs 32,000
          </Text>
        </View>
        <Text style={styles.subheading}>23K Views . Aug 10,2023</Text>

        <View style={styles.row}>
          <Image source={images.person2} style={styles.smallimg} />
          <View>
            <Text numberOfLines={1} style={styles.bluename}>
              Ramesh Singh
            </Text>
            <View style={styles.row}>
              <Text
                numberOfLines={1}
                style={[
                  styles.bluename,
                  {color: '#FE9400', width: width * 0.68},
                ]}>
                Educator
              </Text>
              <View style={styles.row}>
                <Image source={icons.star} style={styles.star} />
                <Text style={styles.rate}>4.8</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.row, {marginVertical: height * 0.012}]}>
          <View style={styles.row}>
            <Text style={styles.time}>10h 25min</Text>
            <Text style={[styles.lesson, {width: width * 0.52}]}>
              9 Lessons
            </Text>
          </View>

          <TouchableOpacity>
            <Image />
          </TouchableOpacity>
        </View>
        <Text
          style={[
            styles.heading,
            {marginTop: height * 0.01, marginBottom: height * 0.01},
          ]}>
          Course Content
        </Text>
      </View>

      <FlatList
        data={data.courseVideo}
        renderItem={({item, index}) => (
          <CourseVideo
            title={item?.title}
            time={item?.time}
            onPress={() => navigation.navigate('CourseBuy')}
          />
        )}
      />

      <YellowBtn
        children="BUY THIS COURSE"
        btnStyle={styles.buybtn}
        onPress={() => navigation.navigate('CourseBuy')}
      />
    </ScrollView>
  );
};

export default CourseDetail;
