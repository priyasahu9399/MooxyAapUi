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
import SearchBox from './../../component/InputText/search';
import {YellowBtn} from './../../component/Button/index';

const {height, width} = Dimensions.get('window');
const SixBox = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.sixbox}>
      <Image source={icon} style={styles.sixIcon} />
      <Text style={styles.sixtext}>{title}</Text>
    </TouchableOpacity>
  );
};

const VideoList = ({onPress, title}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.bgblueBox}>
      <Image source={icons.video} style={styles.videoimg} />
      <Text style={styles.videotext}>{title}</Text>
      <Image source={icons.rarrow} style={styles.arrow} />
    </TouchableOpacity>
  );
};

const MyLearning = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <SearchBox disabled={true} />

        <View style={[styles.row, {marginBottom: height * 0.02}]}>
          <View>
            <Text style={styles.heading}>Excel Your Career </Text>
            <Text style={styles.subtext}>
              Get subscription and unlock full access to all the powerful self
              study features.
            </Text>
            <YellowBtn
              children="VIEW COURSES"
              btnStyle={{width: width * 0.47}}
              onPress={() => navigation.navigate('Course')}
            />
          </View>
          <Image source={images.learn} style={styles.community} />
        </View>

        <View style={styles.row}>
          <SixBox
            title="Courses"
            icon={icons.course}
            // ViewCourse
            onPress={() => navigation.navigate('Course')}
          />
          <SixBox
            title="Batches"
            icon={icons.batch}
            onPress={() => navigation.navigate('NotesList')}
          />
          <SixBox
            title="Educators"
            icon={icons.eduction}
            onPress={() => navigation.navigate('CourseBatchEducator')}
          />
        </View>
        <View style={styles.row}>
          <SixBox
            title="Notes"
            icon={icons.notes}
            onPress={() => navigation.navigate('NotesWrite')}
          />
          <SixBox
            title="Practice"
            icon={icons.practice}
            onPress={() => navigation.navigate('Practice')}
          />
          <SixBox
            title="Quiz"
            icon={icons.quiz}
            onPress={() => navigation.navigate('QuizStart')}
          />
        </View>
        <Image source={images.learn1} style={styles.oneimg} />
        <View style={styles.cartborder}>
          <Text
            style={[
              styles.title,
              {marginLeft: width * 0.04, marginBottom: height * 0.01},
            ]}>
            Course Purchased
          </Text>
          <FlatList
            data={data.chat}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('LearningVideoDetail')}
                activeOpacity={0.6}
                style={styles.cartBox}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={images.course2} style={styles.cartimg} />
                  <View>
                    <Text style={styles.title}>Hardware Repair Course</Text>
                    <Text style={styles.subtitle}>2 Months</Text>
                    <Text style={styles.subtitle}>Valid till Dec,2023</Text>
                  </View>
                </View>
                <View style={[styles.row, {marginTop: height * 0.02}]}>
                  <View style={styles.smallimgbox}>
                    <Image source={images.person2} style={styles.smallimg} />
                  </View>

                  <View>
                    <View style={styles.cartrow}>
                      <Text
                        numberOfLines={1}
                        style={[styles.bluename, {width: width * 0.35}]}>
                        Ramesh Singh
                      </Text>
                      <View style={styles.row}>
                        <View style={styles.cartrow}>
                          <Text style={styles.time}>10h 25min</Text>
                          <Text style={styles.lesson}>9 Lessons</Text>
                        </View>
                      </View>
                    </View>
                    <Text
                      numberOfLines={1}
                      style={[styles.bluename, {color: '#FE9400'}]}>
                      Educator
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <VideoList
          title="Demo Course Videos"
          onPress={() => navigation.navigate('DemoCourseVideo')}
        />
        <VideoList
          title="Videos"
          onPress={() => navigation.navigate('LearningVideo')}
        />

        <View style={styles.coursetypebox}>
          <Image source={images.refer} style={styles.referimg} />
          <View>
            <Text style={styles.refertitle}>Refer a friend</Text>
            <Text style={styles.referrupe}>Earn RS 2000</Text>
            <YellowBtn children="REFER" btnStyle={{width: width * 0.4}} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyLearning);
