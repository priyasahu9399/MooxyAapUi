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
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import {YellowBtn} from './../../component/Button/index';

const {height, width} = Dimensions.get('window');

const AboutUs = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innercontainer}>
          <Image source={images.mooxylogo} style={styles.img} />

          <Text style={styles.subText}>
            <Text style={styles.blueheading}>Mooxy Training Institute</Text> is
            one of the leading Mobile repairing Course institute in Bhopal. Here
            we are providing the quality training which helps you in your career
            growth. Our faculty has 8+ years of experience in Mobile repairing
            training. As a result, the certified and experienced faculty has
            capability to change the student career. We provide the best
            training and advanced training lab for mobile repairing course. Our
            institute keeps up a variety of ideal techniques for students
            interested in theories and practices. Our staff is highly qualified
            with good behaviour and has the most up-to-date knowledge in the
            specialisation. Our teachers prepare each student to be competitive
            in business.We will teach you with fully modern equipment. Therefore
            we give not only theory class but also practical. So you can
            practice every class in our institute. You can learn this Mobile
            repair in Bhopal at your affordable price.
          </Text>
          <Text style={[styles.subText, {color: COLORS.primary}]}>
            Here we offer training for all mobile repairing.
          </Text>
          <Text style={styles.heading}>
            Best Smart Phone Training Institute In Bhopal.
          </Text>

          <View style={styles.row}>
            <View style={{width: width * 0.47}}>
              <Text style={styles.numGraytext}>8000+</Text>
              <Text style={styles.bluenumtext}>Students Trained</Text>
            </View>
            <View style={{width: width * 0.47}}>
              <Text style={styles.numGraytext}>500+</Text>
              <Text style={styles.bluenumtext}>OverAll Batches</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={{width: width * 0.47}}>
              <Text style={styles.numGraytext}>5000+</Text>
              <Text style={styles.bluenumtext}>Students Placed</Text>
            </View>
            <View style={{width: width * 0.47}}>
              <Text style={styles.numGraytext}>8+</Text>
              <Text style={styles.bluenumtext}>Years Of Experience</Text>
            </View>
          </View>

          <Text style={styles.heading}>
            Points that make us different from others.
          </Text>
        </View>
        <View>
          <View style={styles.bgblueBox}>
            <View style={styles.rowicon}>
              <Image source={icons.mission} style={styles.icons} />
              <Text
                style={[styles.heading, {color: COLORS.primary, marginTop: 0}]}>
                OUR MISSION
              </Text>
            </View>
            <Text style={styles.subText}>
              Our purpose is to give professional and vocational education with
              extreme importance on application-based, effective and hands-on
              practice to prepare our learners industry-ready. To be a
              networking resolution that gives you the greatest of possibilities
              in the modern fast developing demand.
            </Text>
          </View>
          <View style={styles.bgblueBox}>
            <View style={styles.rowicon}>
              <Image source={icons.vision} style={styles.icons} />
              <Text
                style={[styles.heading, {color: COLORS.primary, marginTop: 0}]}>
                OUR VISION
              </Text>
            </View>
            <Text style={styles.subText}>
              Our purpose is to give professional and vocational education with
              extreme importance on application-based, effective and hands-on
              practice to prepare our learners industry-ready. To be a
              networking resolution that gives you the greatest of possibilities
              in the modern fast developing demand.
            </Text>
          </View>
          <View style={styles.bgblueBox}>
            <View style={styles.rowicon}>
              <Image source={icons.team} style={styles.icons} />
              <Text
                style={[styles.heading, {color: COLORS.primary, marginTop: 0}]}>
                OUR TEAM
              </Text>
            </View>
            <Text style={styles.subText}>
              Our purpose is to give professional and vocational education with
              extreme importance on application-based, effective and hands-on
              practice to prepare our learners industry-ready. To be a
              networking resolution that gives you the greatest of possibilities
              in the modern fast developing demand.
            </Text>
          </View>

          <View style={styles.innercontainer}>
            <Text style={styles.heading}>Course Detail: </Text>
            <View>
              <Text style={[styles.bluenumtext, {marginTop: height * 0.01}]}>
                Course Duration
              </Text>
              <Text style={[styles.subText, {marginTop: 0}]}>
                3 Months Course,Daily 1.5 Hour/Batch
              </Text>
            </View>

            <View>
              <Text style={[styles.bluenumtext, {marginTop: height * 0.01}]}>
                Batch Timings
              </Text>
              <Text style={[styles.subText, {marginTop: 0}]}>
                The Batch Starts from10.30 AM to 9.00 PM Evening
              </Text>
            </View>

            <View>
              <Text style={[styles.bluenumtext, {marginTop: height * 0.01}]}>
                Key Highlights
              </Text>
              <Text style={[styles.subText, {marginTop: 0}]}>
                Classroom Training In a group of 1 to 5
              </Text>
            </View>

            <View>
              <Text style={[styles.bluenumtext, {marginTop: height * 0.01}]}>
                Contact
              </Text>

              <View style={[styles.rowicon, {marginTop: height * 0.007}]}>
                <Text
                  style={[
                    styles.subText,
                    {marginTop: 0, ...FONTS.fiveHundred},
                  ]}>
                  Person Name:
                </Text>
                <Text style={[styles.subText, {marginTop: 0}]}>Ritesh </Text>
              </View>

              <View style={[styles.rowicon, {marginTop: height * 0.01}]}>
                <Text
                  style={[
                    styles.subText,
                    {marginTop: 0, ...FONTS.fiveHundred},
                  ]}>
                  Mobile Number:
                </Text>
                <Text style={[styles.subText, {marginTop: 0}]}>
                  +91 8000000000
                </Text>
              </View>

              <View style={[styles.rowicon, {marginVertical: height * 0.01}]}>
                <Text
                  style={[
                    styles.subText,
                    {marginTop: 0, ...FONTS.fiveHundred},
                  ]}>
                  Mail Id:
                </Text>
                <Text style={[styles.subText, {marginTop: 0}]}>
                  info@mooxy.com
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
