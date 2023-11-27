import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import * as Progress from 'react-native-progress';

const {height, width} = Dimensions.get('window');

const Progresscart = ({
  title,
  score,
  unfilledColor,
  color,
  borderColor,
  progress,
}) => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{score}</Text>
      </View>
      <Progress.Bar
        progress={progress}
        width={width * 0.79}
        height={height * 0.006}
        borderColor={borderColor}
        color={color}
        unfilledColor={unfilledColor}
        style={{alignSelf: 'center'}}
      />
    </View>
  );
};
const QuizResult = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />

      <ImageBackground source={images.quizbg} style={styles.ImageBackground}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile')}
          activeOpacity={0.6}>
          <View style={styles.profilebox}>
            <Image source={images.profile3} style={styles.profile} />
          </View>
        </TouchableOpacity>
        <Text style={styles.heading}>Sonal Mehra</Text>
        <Text style={styles.heading}>Score: 80%</Text>

        <Text style={styles.subhead}>
          Sorry you <Text style={{color: '#FF0000'}}>did not passed</Text> this
          time.
        </Text>
        <Image source={icons.sad} style={styles.sadicon} />
        <View
          showsVerticalScrollIndicator={false}
          style={styles.innercontainer}>
          <Progresscart
            title="Completation"
            score="100%"
            unfilledColor={COLORS.lightblue}
            color={COLORS.primary}
            borderColor={COLORS.lightblue}
            progress={0.5}
          />
          <Progresscart
            title="Total Question"
            score="5"
            unfilledColor={'#F5C98B'}
            color={'#FE9400'}
            borderColor={'#F5C98B'}
            progress={0.5}
          />
          <Progresscart
            title="Correct"
            score="4"
            unfilledColor={'#C7FFAD'}
            color={'#51FD00'}
            borderColor={'#C7FFAD'}
            progress={0.5}
          />
          <Progresscart
            title="Wrong"
            score="1"
            unfilledColor={'#FCBFBF'}
            color={'#FF0000'}
            borderColor={'#FCBFBF'}
            progress={0.5}
          />
          <Progresscart
            title="Pass"
            score="80"
            unfilledColor={'#98C3DF'}
            color={'#005C97'}
            borderColor={COLORS.lightblue}
            progress={0.5}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(QuizResult);
