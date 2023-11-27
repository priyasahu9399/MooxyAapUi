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
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';

const {height, width} = Dimensions.get('window');

const QuizQuestion = ({navigation}) => {
  const [activeAns, setactiveAns] = useState();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const ref = useRef(null);

  const goPreviousSlide = () => {
    const PreviousSlideIndex = currentSlideIndex - 1;
    if (PreviousSlideIndex != -1) {
      const offset = PreviousSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(PreviousSlideIndex);
    }
  };

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != data.quizque.length) {
      const offset = nextSlideIndex * width * .94;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <View showsVerticalScrollIndicator={false} style={styles.innercontainer}>
        <View style={styles.roundbluebox}>
          <Text style={[styles.roundblueboxtext, {color: COLORS.white}]}>
            Q 1
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.roundblueboxtext, {width: width * 0.2}]}>
            Score{''} 100
          </Text>
          <Text style={[styles.roundblueboxtext, {width: width * 0.4}]}>
            Completed {''} 0/5
          </Text>
          <View style={styles.scorebluebox}>
            <Text style={[styles.roundblueboxtext, {color: COLORS.white}]}>
              Score {''} 1/5
            </Text>
          </View>
        </View>

        <View style={styles.pillrow}>
          {data.quizque.map((item, index) => (
            <View
              key={index}
              style={[
                styles.pillbg,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.primary,
                },
              ]}></View>
          ))}
        </View>

        <View style={{paddingVertical: height * 0.01}}>
          <FlatList
            data={data.quizque}
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            ref={ref}
            renderItem={({item, index}) => (
              <View
                style={{
                  width: width * 0.94,
                }}>
                <View style={styles.checkrow}>
                  <Text style={styles.checktext}>{item?.que}</Text>
                </View>
                {item?.ans.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setactiveAns(index)}
                    activeOpacity={0.6}
                    style={[
                      styles.checkrow,
                      activeAns == index && {backgroundColor: COLORS.primary},
                    ]}>
                    <Text
                      style={[
                        styles.checktext,
                        activeAns == index && {color: COLORS.white},
                      ]}>
                      {item?.ans1}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          currentSlideIndex == data.quizque.length - 1
            ? navigation.navigate('QuizResult')
            : goNextSlide()
        }
        activeOpacity={0.6}
        style={styles.yarrowbox}>
        <Image source={icons.yarrow} style={styles.yarrow} />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(QuizQuestion);
