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
import VideoPlayer from 'react-native-video-player';

const {width, height} = Dimensions.get('window');

const VideoCart = ({thumbnail, uri}) => {
  return (
    <VideoPlayer
      video={{uri: uri}}
      videoWidth={width * 0.94}
      videoHeight={height * 0.24}
      showDuration
      controls
      customStyles={styles.videocustomstyle}
      thumbnail={thumbnail}
      resizeMode="cover"
    />
  );
};

export default VideoCart;

const styles = StyleSheet.create({});
