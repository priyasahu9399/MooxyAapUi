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

const HomeSlider = ({onPress, datalist, scrollimgstyle, source}) => {
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
      <View style={styles.arrowbox}>
        <TouchableOpacity
          onPress={() => goNextSlide()}
          activeOpacity={0.6}
          style={styles.arrowbox1}>
          <Image source={icons.rarrow1} style={styles.arrow} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goPreviousSlide()}
          activeOpacity={0.6}
          style={styles.arrowbox2}>
          <Image source={icons.larrow} style={styles.arrow} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={datalist}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ref={ref}
        renderItem={({item, index}) => (
          <View key={index} onPress={onPress} style={styles.scrollBox}>
            <Image
              source={item?.image}
              style={[styles.scrollImage, scrollimgstyle]}
            />
          </View>
        )}
      />
      {/* <View style={styles.dotbox}>
        {datalist?.map((item, index) => (
          <View
            key={index}
            style={{
              ...styles.dotstyle,
              backgroundColor:
                currentSlideIndex === index ? COLORS.primary : COLORS.gray30,
            }}></View>
        ))}
      </View> */}
    </View>
  );
};

export default HomeSlider;
const styles = StyleSheet.create({
  scrollBox: {
    width: width,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    marginTop: height * 0.01,
  },
  scrollImage: {
    width: width * 0.94,
    height: height * 0.23,
    borderRadius: 10,
    resizeMode: 'stretch',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  arrowbox: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1000,
    top: height * 0.11,
  },
  arrowbox1: {
    left: width * 0.9,
  },
  arrowbox2: {
    left: width * 0,
  },
  arrow: {
    height: width * 0.052,
    width: width * 0.052,
    resizeMode: 'contain',
  },
});
