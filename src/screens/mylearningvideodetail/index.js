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
import LearningSlider from './../../component/slider/learningSlider';
import VideoCart from './../../component/video/videos';

const {width, height} = Dimensions.get('window');
const LearningVideoDetail = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

      <View style={styles.videobox}>
        <View style={styles.videoinnerbox}>
          <VideoCart
            uri={
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            }
            thumbnail={images.course2}
          />
        </View>
      </View>

      <LearningSlider
        datalist={data.learnslider}
        scrollimgstyle={{height: height * 0.23}}
      />
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
    </ScrollView>
  );
};

export default LearningVideoDetail;
