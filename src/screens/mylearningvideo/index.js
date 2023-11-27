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
const LearningVideo = ({navigation}) => {
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
            // onPress={() => navigation.navigate('CourseBuy')}
          />
        )}
      />

      <View style={styles.row}>
        <Text style={styles.title}>Having Query?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChatUs')}
          style={styles.border}>
          <Text style={styles.bluename}>CHAT NOW</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LearningVideo;
