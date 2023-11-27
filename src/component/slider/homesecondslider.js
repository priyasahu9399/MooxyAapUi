import React, {useState, useRef, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {icons, images} from '../../constants';
import {FONTS, COLORS} from '../../constants';
import {connect} from 'react-redux';
import {http2} from './../../services/api';

const {width, height} = Dimensions.get('window');

const HomeSecondSlider = ({onPress, datalist, scrollimgstyle, source}) => {
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
    if (nextSlideIndex != datalist.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  return (
    <View>
      <FlatList
        data={datalist}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ref={ref}
        renderItem={({item, index}) => (
          <View style={styles.scrollBox}>
            <View style={styles.profilebox}>
              <Image source={item?.img} style={styles.profile} />
            </View>
            <View style={styles.sliderbg}>
              <Text style={styles.slidertext}>
               {item?.text1}
              </Text>
            </View>
          </View>
        )}
      />
      <View style={styles.dotbox}>
        {datalist?.map((item, index) => (
          <View
            key={index}
            style={{
              ...styles.dotstyle,
              backgroundColor:
                currentSlideIndex === index ? COLORS.primary : COLORS.gray20,
            }}></View>
        ))}
      </View>
    </View>
  );
};

export default HomeSecondSlider;

const styles = StyleSheet.create({
  scrollBox: {
    width: width,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
  },
  scrollImage: {
    width: width * 0.94,
    height: height * 0.23,
    borderRadius: 10,
    resizeMode: 'stretch',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  dotbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.01,
    marginBottom: height * 0.02,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  dotstyle: {
    height: width * 0.026,
    width: width * 0.026,
    marginRight: width * 0.015,
    borderRadius: 10,
  },
  profilebox: {
    width: width * 0.26,
    height: width * 0.26,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    marginTop: height * 0.03,
    borderWidth: 3,
    borderColor: COLORS.white,
    zIndex: 1110,
    marginLeft: width * 0.03,
  },
  profile: {
    width: width * 0.24,
    height: width * 0.24,
    resizeMode: 'stretch',
    borderRadius: 90,
  },
  sliderbg: {
    backgroundColor: '#EDEDED',
    paddingTop: height * 0.07,
    paddingBottom: height * 0.05,
    paddingHorizontal: height * 0.02,
    marginTop: height * -0.06,
  },
  slidertext: {
    color: COLORS.black,
    fontSize: width * 0.032,
    ...FONTS.fourHundred,
    height: height * 0.077,
    lineHeight: height * 0.026,
  },
});
