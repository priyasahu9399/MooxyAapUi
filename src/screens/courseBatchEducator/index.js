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
import CourseCart from './../../component/carts/coursecart';

const {width, height} = Dimensions.get('window');
const CourseBatchEducator = ({navigation}) => {
  const [active, setActive] = useState(1);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Image source={images.mooxylogo} style={styles.profile} />
      <View style={styles.listbox}>
        <TouchableOpacity
          onPress={() => setActive(1)}
          style={[
            styles.listtextbox,
            active == 1 && {backgroundColor: COLORS.lightblue},
          ]}>
          <Text
            style={[styles.listtext, active == 1 && {color: COLORS.primary}]}>
            Courses
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActive(2)}
          style={[
            styles.listtextbox,
            active == 2 && {backgroundColor: COLORS.lightblue},
          ]}>
          <Text
            style={[styles.listtext, active == 2 && {color: COLORS.primary}]}>
            Batches
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActive(3)}
          style={[
            styles.listtextbox,
            active == 3 && {backgroundColor: COLORS.lightblue},
          ]}>
          <Text
            style={[styles.listtext, active == 3 && {color: COLORS.primary}]}>
            Educators
          </Text>
        </TouchableOpacity>
      </View>
      {/* courses start */}
      {active == 1 && (
        <View>
          <View>
            <View style={styles.toprow}>
              <Text style={styles.heading}>Upcoming Courses</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={[styles.heading, {color: COLORS.primary}]}>
                  See All
                </Text>
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
                  graytext="Starts On 15 Dec 2023"
                  onPress={() => navigation.navigate('CourseDetail')}
                />
              )}
            />
          </View>
          <View>
            <View style={styles.toprow}>
              <Text style={styles.heading}>Ongoing Courses</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={[styles.heading, {color: COLORS.primary}]}>
                  See All
                </Text>
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
                  graytext="Chapter- 3"
                  onPress={() => navigation.navigate('CourseDetail')}
                />
              )}
            />
          </View>
          <View style={{paddingBottom: height * 0.04}}>
            <View style={styles.toprow}>
              <Text style={styles.heading}>Popular Courses</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={[styles.heading, {color: COLORS.primary}]}>
                  See All
                </Text>
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
                  graytext="Ended On 10 Nov 2023"
                  onPress={() => navigation.navigate('CourseDetail')}
                />
              )}
            />
          </View>
        </View>
      )}
      {/* courses end */}
      {/* batches start */}
      {active == 2 && (
        <View>
          <View>
            <View style={styles.toprow}>
              <Text style={styles.heading}>Ongoing Batches</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={[styles.heading, {color: COLORS.primary}]}>
                  See All
                </Text>
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
                  graytext="Chapter -2"
                  onPress={() => navigation.navigate('CourseDetail')}
                />
              )}
            />
          </View>
          <View>
            <View style={styles.toprow}>
              <Text style={styles.heading}>Completed Courses</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={[styles.heading, {color: COLORS.primary}]}>
                  See All
                </Text>
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
                  graytext="Ended On 10 Nov 2023"
                  onPress={() => navigation.navigate('CourseDetail')}
                />
              )}
            />
          </View>
        </View>
      )}
      {/* batches end */}
      {active == 3 && (
        <View>
          <View style={styles.toprow}>
            <Text style={styles.heading}>Educators</Text>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={[styles.heading, {color: COLORS.primary}]}>
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.educatrow}>
            {data.chat.map((item, index) => (
              <TouchableOpacity activeOpacity={0.6} style={styles.cartBox}>
                <Image source={images.person1} style={styles.cartimage} />
                <Text style={styles.carttitle}>Arvind Singh</Text>
                <Text style={styles.cartsubtitle}>32K Followers</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default CourseBatchEducator;
