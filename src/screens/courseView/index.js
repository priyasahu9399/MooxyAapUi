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
  TextInput,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import styles from './styles';
import {icons, images} from './../../constants';
import {data} from './../../constants';
import ButtonCustom from './../../component/Button';
import CourseCart from './../../component/carts/coursecart';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {YellowBtn} from './../../component/Button/index';

const {width, height} = Dimensions.get('window');
const ViewCourse = ({navigation}) => {
  const [active, setActive] = useState(0);
  const [activecheck, setActivecheck] = useState();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={{alignSelf: 'center', width: width * 0.94}}>
        <Image source={images.mooxylogo} style={styles.profile} />
        <Text style={styles.heading}>Mobile Repair Subscription</Text>
        <Text style={styles.subheading}>Select a course and proceed</Text>
      </View>

      <FlatList
        data={data.ViewCourse}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.6}
            style={styles.bluebox}>
            <Image source={item?.bigimg} style={styles.bigimg} />
            <View>
              <Text numberOfLines={2} style={styles.title}>
                {item?.title}
              </Text>
              <View style={[styles.row, {marginBottom: height * 0.012}]}>
                <Text numberOfLines={1} style={styles.pinktext}>
                  Rs {item?.price}
                </Text>

                <TouchableOpacity
                  onPress={() => setActivecheck(index)}
                  style={styles.checkbox}>
                  <FontAwesome6
                    name="check"
                    size={16}
                    color={
                      activecheck == index ? COLORS.primary : COLORS.lightblue
                    }
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.row}>
                <Text style={styles.time}>{item?.time}</Text>
                <Text style={styles.lesson}>{item?.lesson} Lessons</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <View
        style={[
          styles.row,
          {justifyContent: 'space-around', marginBottom: height * 0.02},
        ]}>
        <View style={styles.refinputbox}>
          <TextInput placeholder="Have a referral code?" style={styles.input} />
          <Image source={icons.offerref} style={styles.icon} />
        </View>

        <YellowBtn
          children="PROCEED"
          btnStyle={{width: width * 0.4, height: height * 0.055}}
        />
      </View>
    </ScrollView>
  );
};

export default ViewCourse;
