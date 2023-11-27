import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import { YellowBtn } from "./../../component/Button/index";

const {height, width} = Dimensions.get('window');

const QuizStart = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [activecheck, setActivecheck] = useState();

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ImageBackground source={images.quiz} style={styles.oneimg}>
        <Text style={styles.title}>
          Join our daily challange and win special gift just for you.
        </Text>

        <YellowBtn
          children="START THE GAME"
          btnStyle={styles.btn}
          onPress={() => navigation.navigate('QuizTopic')}
        />
      </ImageBackground>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(QuizStart);
