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
import LearningSlider from "./../../component/slider/learningSlider";

const {width, height} = Dimensions.get('window');
const DemoCourseVideo = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
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

      <LearningSlider datalist={data.learnslider} />
    </ScrollView>
  );
};

export default DemoCourseVideo;
