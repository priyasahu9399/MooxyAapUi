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

const Basic = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Module 1 (Basics of mobile)</Text>
        <View style={styles.innercontainer}>
          <Text style={[styles.subText, {marginTop: height * 0.02}]}>
            The first module will act as a bridging course for those students
            who do not have any prior knowledge about this field. For others,
            who already have prior knowledge about electrical and electronic
            engineering, this module will help them revise these concepts.
          </Text>

          <View style={styles.addrow}>
            <View style={styles.dot}></View>
            <Text style={styles.subText}>Basics of mobile communication. </Text>
          </View>
          <View style={styles.addrow}>
            <View style={styles.dot}></View>
            <Text style={styles.subText}>Study of Digital Electronics.</Text>
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
        </View>

        <YellowBtn
          children="ENQUIRY"
          btnStyle={styles.btn}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Basic);
