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
import {YellowBtn} from './../../component/Button';
import ButtonCustom from './../../component/Button';

const {height, width} = Dimensions.get('window');

const Practice = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <View>
            <Text style={styles.headingrow}>
              Access Your Preparation With Practice
            </Text>
            <Text style={styles.subtext}>1. Practices by top educators.</Text>
            <Text style={styles.subtext}>2. Continue where you left.</Text>
          </View>
          <Image source={images.practice} style={styles.community} />
        </View>

        <YellowBtn
          children="UPGRADE"
          btnStyle={styles.btn}
          onPress={() => navigation.navigate('PracticeQuestion')}
        />

        <View style={styles.toprow}>
          <Text style={styles.heading}>Basic Of Mobile</Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={[styles.heading, {color: COLORS.primary}]}>
              All Chapters
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingBottom: height * 0.02}}>
          <FlatList
            data={data.practice}
            renderItem={({item, index}) => (
              <View style={styles.bgblueBox}>
                <View>
                  <Text style={styles.title}>{item?.title}</Text>
                  <Text style={styles.subtitle}>{item?.que}</Text>
                </View>
                <ButtonCustom
                  children="START"
                  btnStyle={{width: width * 0.2, height: height * 0.045}}
                  onPress={() => navigation.navigate('QuizTopic')}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Practice);
