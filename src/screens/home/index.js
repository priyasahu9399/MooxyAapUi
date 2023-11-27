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
  FlatList,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import HomeSlider from './../../component/slider/homeAutoscrollslider';
import {YellowBtn} from './../../component/Button/index';
import * as Progress from 'react-native-progress';
import HomeSecondSlider from './../../component/slider/homesecondslider';
import Modal from 'react-native-modal';
import VideoCart from './../../component/video/videos';
import Loader from "./../../component/modalLoading/index";

const {height, width} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [simactive, setsimActive] = useState(0);
  navigation?.setOptions({
    headerRight: () => (
      <View style={styles.headrow}>
        <View style={styles.headerbox}>
          <Text style={styles.headertext}>PA</Text>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          activeOpacity={0.6}
          style={styles.headerbox}>
          <Text style={styles.headertext}>CCS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
          style={styles.headerbox}>
          <Image source={icons.search} style={styles.searchicon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notification')}
          style={styles.headerbox}>
          <Image source={icons.notify1} style={styles.bell} />
          <View style={styles.countbox}>
            <Text style={styles.count}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    ),
  });
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <Text style={styles.heading}>Good Morning!</Text>
        <HomeSlider datalist={data.homesliderlist} />
        <Text style={[styles.heading, {marginTop: height * 0.012}]}>
          Hi, Sonal!
        </Text>
        <Text style={styles.subheading}>Let’s start learning</Text>

        <View style={styles.categoryrow}>
          {data?.categorylist2?.map((item, index) => (
            <TouchableOpacity key={item?.id}>
              <Image source={item?.img} style={styles.topcatImg} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.videoinnerbox}>
          <VideoCart
            uri={
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            }
            thumbnail={images.homelist1}
          />
        </View>
        <View style={styles.videoinnerbox}>
          <VideoCart
            uri={
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            }
            thumbnail={images.homelist2}
          />
        </View>
        <Text style={styles.heading}>Category</Text>
        <FlatList
          data={data.categorylist}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                setActive(index), navigation.navigate(item?.navigation);
              }}
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
        <FlatList
          data={data.rangcart}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item?.navigation)}>
              <ImageBackground
                key={index}
                source={item?.bgimg}
                style={[
                  styles.bgimagebox,
                  {
                    marginLeft: index == 0 ? width * 0.034 : width * 0.005,
                    marginRight:
                      data.categorylist?.length - 1
                        ? width * 0.03
                        : width * 0.01,
                  },
                ]}>
                <View style={styles.bgimageinnerbox}>
                  <Image style={styles.bgimage} source={item?.img} />
                </View>
                <Text style={styles.bgimagetext}>{item?.title}</Text>
                <Progress.Bar
                  progress={item?.progress}
                  width={width * 0.34}
                  height={height * 0.006}
                  borderRadius={12}
                  borderColor={COLORS.gray10}
                  color={item?.pgColor}
                  indeterminate={false}
                  unfilledColor={COLORS.gray10}
                />
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
        <View style={styles.blueBox}>
          <Text style={styles.blueBoxText}>Next Batch Admission Going On!</Text>
          <YellowBtn
            children="APPLY NOW"
            btnStyle={{alignSelf: 'center', marginTop: height * 0.02}}
          />
        </View>
        <View>
          <Text style={styles.question}>
            Who Can Join Our Smartphone Mobile Repairing Course?
          </Text>
          <View>
            <Text style={styles.queHeading}>Freshers</Text>
            <Text style={styles.questionAns}>
              A fresher, who has no experience or knowledge about repairing, can
              join our course because we start from basic fundament training and
              after that go to high-level repairing.
            </Text>
          </View>
          <View>
            <Text style={styles.queHeading}>Working Person</Text>
            <Text style={styles.questionAns}>
              A person who has knowledge but wants to increase their repairing
              technics at an advanced level or startup their own work can join
              our all advanced or basic level course where provide complete
              training of advanced repairing.
            </Text>
          </View>
          <View>
            <Text style={styles.queHeading}>Job Seeker</Text>
            <Text style={styles.questionAns}>
              A person who is searching for a job can join our institute because
              we provide job placement support after the completion of the
              training, we placed our students at the various service center or
              MNCs.
            </Text>
          </View>
        </View>
        <Image
          source={images.home2}
          style={[
            styles.oneimg,
            {width: width, borderRadius: 0, marginTop: height * 0.025},
          ]}
        />
        <Text style={styles.question}>
          Be In Demand With Our Professional Training.
        </Text>
        <View style={styles.blueBox}>
          <View style={styles.blueImgBox}>
            <Image source={images.profile2} style={styles.blueImg} />
          </View>
          <Text style={styles.blueBoxText}>Name- Founder & CEO</Text>
        </View>
        <Text style={styles.question}>What our student says about us. </Text>
        <HomeSecondSlider datalist={data.homesliderlist2} />
        <View style={styles.blueBox}>
          <Text style={styles.blueBoxText}>
            Learn From The Best To Be The Best!
          </Text>
          <Text style={[styles.blueBoxText, {marginTop: height * 0.004}]}>
            Successfully trained thousands of students.
          </Text>
          <YellowBtn
            children="CONTACT US NOW"
            btnStyle={{
              alignSelf: 'center',
              marginTop: height * 0.015,
              width: width * 0.4,
            }}
            onPress={() => navigation.navigate('ContactUs')}
          />
        </View>

        <Modal backdropOpacity={0.5} isVisible={isModalVisible}>
          <View style={styles.modalbox}>
            <Text style={styles.modaltitle}>Validate Mobile Number</Text>
            <Text style={styles.modalsubtitle}>
              We need to send an sms from +91-8989898989 to fetch your linked
              account.
            </Text>
            <Text style={styles.modalsubtitle}>Choose SIM</Text>
            <View style={[styles.headrow, {alignSelf: 'center'}]}>
              <TouchableOpacity
                onPress={() => setsimActive(0)}
                style={[
                  styles.simBox,
                  simactive == 0 && {borderColor: COLORS.yellow},
                ]}>
                <Image
                  source={icons.sim1}
                  style={[
                    styles.simicon,
                    simactive == 0 && {tintColor: COLORS.yellow},
                  ]}
                />
                <Text style={styles.modaltitle}>Jio</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setsimActive(1)}
                style={[
                  styles.simBox,
                  simactive == 1 && {borderColor: COLORS.yellow},
                ]}>
                <Image
                  source={icons.sim2}
                  style={[
                    styles.simicon,
                    simactive == 0 && {tintColor: COLORS.yellow},
                  ]}
                />
                <Text style={styles.modaltitle}>Airtel</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.btnrow}>
              <YellowBtn
                children="CANCEL"
                btnStyle={styles.cancelbtn}
                btntextstyle={{color: COLORS.yellow}}
                onPress={() => setModalVisible(false)}
              />
              <YellowBtn
                children="CONTINUE"
                btnStyle={styles.contiBtn}
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
