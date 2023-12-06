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
import WalletCart from './../../component/carts/walletcart';
import ButtonCustom from './../../component/Button';
import SearchBox from './../../component/InputText/search';
import CourseCart from './../../component/carts/coursecart';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {YellowBtn} from './../../component/Button/index';
import Modal from 'react-native-modal';

const {width, height} = Dimensions.get('window');
const Course = ({navigation}) => {
  const [active, setActive] = useState(0);
  const [activecheck, setActivecheck] = useState();
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.toprow}>
        <View>
          <Text style={styles.heading}>Hey, Sonal!</Text>
          <Text style={styles.subheading}>
            Find a course you want to learn.
          </Text>
        </View>
        <View style={styles.profilebox}>
          <Image source={images.profile3} style={styles.profile} />
        </View>
      </View>

      <SearchBox disabled={true} placeholder="Search" />

      <View style={styles.toprow}>
        <Text style={styles.heading}>Explore Courses</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={[styles.heading, {color: COLORS.primary}]}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data.courselist}
        renderItem={({item, index}) => (
          <CourseCart
            bigimg={item.bigimg}
            title={item.title}
            profileimg={item.profileimg}
            name={item.name}
            name2={item.name2}
            time={item.time}
            lesson={item.lesson}
            rate={item.rate}
            onPress={() => navigation.navigate('CourseDetail', item.title)}
          />
        )}
      />
      <Text style={[styles.heading, {marginLeft: width * 0.03}]}>Category</Text>
      <FlatList
        data={data.categorylist}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => setActive(index)}
            key={item => item?.id}
            activeOpacity={0.6}
            style={[
              styles.listbox,
              {
                marginLeft: index == 0 ? width * 0.034 : width * 0.005,
                marginRight:
                  data.categorylist?.length - 1 ? width * 0.03 : width * 0.01,
                backgroundColor:
                  active == index ? 'rgb(253, 203,15)' : COLORS.white,
              },
            ]}>
            <Text style={styles.listboxtext}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
      <Text
        style={[
          styles.heading,
          {marginLeft: width * 0.03, marginTop: height * 0.02},
        ]}>
        Course Type
      </Text>

      <View
        style={[
          styles.checkrow,
          {marginVertical: height * 0.012, marginBottom: height * 0.02},
        ]}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setActivecheck(1)}
          style={styles.checkrow}>
          <View style={styles.checkbox}>
            <FontAwesome6
              name="check"
              size={16}
              color={activecheck == 1 ? COLORS.primary : COLORS.white}
            />
          </View>
          <Text style={styles.checktext}>Online Batch</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setActivecheck(2)}
          style={styles.checkrow}>
          <View style={styles.checkbox}>
            <FontAwesome6
              name="check"
              size={16}
              color={activecheck == 2 ? COLORS.primary : COLORS.white}
            />
          </View>
          <Text style={styles.checktext}>Offline Batch</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.coursetypebox}>
        <Image source={images.course5} style={styles.referimg} />
        <View>
          <Text style={styles.refertitle}>Refer a friend</Text>
          <Text style={styles.referrupe}>Earn RS 2000</Text>
          <YellowBtn
            children="REFER"
            btnStyle={{width: width * 0.4}}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalblueBox}>
          <View style={styles.toprow}>
            <Text style={[styles.modaltitle, {marginLeft: width * 0.02}]}>
              Unlock big savings!
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image source={icons.x} style={styles.cross} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.modalsubtitle, {marginBottom: height * 0.007}]}>
            Get <Text style={{color: 'rgb(253,203 ,13 )'}}>20% off*</Text>
          </Text>
          <Text style={[styles.modalsubtitle, {marginBottom: height * 0.007}]}>
            On all MooXY Subscriptions
          </Text>
          <View style={styles.toprow}>
            <YellowBtn
              children="SUBSCRIBE NOW"
              btnStyle={{width: width * 0.34, marginLeft: width * 0.02}}
              onPress={() => setModalVisible(false)}
            />
            <View>
              <Text style={styles.modalsubtitle}>Use Code</Text>
              <Text
                style={[styles.modalsubtitle, {color: 'rgb(253,203 ,13 )'}]}>
                UNLOCK20
              </Text>
            </View>
            <Text style={[styles.modalsubtitle, {width: width * 0.22}]}>
              Limited period offer
            </Text>
          </View>

          <Text style={[styles.modalsubtitle, {marginVertical: height * 0.01}]}>
            *T&C apply, as available on the platform
          </Text>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Course;
