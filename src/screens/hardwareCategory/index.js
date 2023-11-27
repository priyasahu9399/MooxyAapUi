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

const Hardware = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Module 2 (Hardware Repair)</Text>
        <View style={styles.innercontainer}>
          <Text style={[styles.subText, {marginTop: height * 0.02}]}>
            The second module will focus on hardware and teach the students how
            to handle and replace various electronic parts. It will help them to
            learn all the hardware repair procedures in a more comprehensive
            manner.
          </Text>

          <View style={styles.addrow}>
            <View style={styles.dot}></View>
            <Text style={styles.subText}>
              Introduction and study of Printed Circuit Board (Motherboard).
            </Text>
          </View>
          <View style={styles.addrow}>
            <View style={styles.dot}></View>
            <Text style={styles.subText}>
              Soldering & desoldering of components by using a soldering iron.
            </Text>
          </View>
          <View style={styles.addrow}>
            <View style={styles.dot}></View>
            <Text style={styles.subText}>
              Assembling and disassembling of various models of mobile phones.
            </Text>
          </View>
          <View style={styles.addrow}>
            <View style={styles.dot}></View>
            <Text style={styles.subText}>
              Study of various tools and equipment used in mobile phone repairs.
            </Text>
          </View>
          <View style={styles.addrow}>
            <View style={styles.dot}></View>
            <Text style={styles.subText}>
              Study of parts inside a mobile phone.
            </Text>
          </View>
          <View style={styles.addrow}>
            <View style={styles.dot}></View>
            <Text style={styles.subText}>Use of DC Power Supply </Text>
          </View>
          <View style={styles.addrow}>
            <View style={styles.dot}></View>
            <Text style={styles.subText}>
              Reheating and mounting of various BGA and SMD chips.
            </Text>
          </View>
          <View style={styles.addrow}>
            <View style={styles.dot}></View>
            <Text style={styles.subText}>
              Soldering & desoldering of components by using a rework station.
            </Text>
          </View>
        </View>

        <YellowBtn children="ENQUIRY" btnStyle={styles.btn} />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Hardware);
