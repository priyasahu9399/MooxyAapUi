import React, {useState, useEffect, useRef} from 'react';
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
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {data} from './../../constants';
import {images, icons} from './../../constants';
import styles from './styles';
import {connect, useDispatch} from 'react-redux';
import {ONBOARDING} from './../../redux/types';
import ButtonCustom from './../../component/Button/index';
const {width, height} = Dimensions.get('window');

const OnboardingScreen = ({image, title, subTitle}) => {
  return (
    <View style={{width: width}}>
      <ImageBackground style={styles.image} source={image}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subTitle}</Text>
      </ImageBackground>
    </View>
  );
};
const Onboarding = ({navigation, onboard}) => {
  const dispatch = useDispatch();

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != data?.OnBoardingData.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <TouchableOpacity
        onPress={() => {
          dispatch({
            type: ONBOARDING,
            payload: false,
          }),
            navigation.navigate('Login');
        }}
        style={{marginRight: width * 0.07}}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={data?.OnBoardingData}
        renderItem={({item, index}) => (
          <OnboardingScreen
            key={index}
            image={item?.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
      />
      {currentSlideIndex == 2 && (
        <ButtonCustom
          children="GET STARTED"
          btnStyle={{marginBottom: height * 0.03, alignSelf: 'center'}}
          onPress={() => {
            dispatch({
              type: ONBOARDING,
              payload: false,
            }),
              navigation.navigate('Login');
          }}
        />
      )}
      <View style={styles.dot_box}>
        {data?.OnBoardingData.map((item, index) => {
          return (
            <View
              key={item.id}
              style={[
                styles.dot,
                currentSlideIndex === item.id && {
                  backgroundColor: COLORS.primary,
                  width: width * 0.06,
                },
              ]}></View>
          );
        })}
      </View>
    </View>
  );
};

const mapStateToProps = state => ({onboard: state.auth.onboard});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
