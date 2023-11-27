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
import {YellowBtn} from './../../component/Button/index';
import CourseVideo from './../../component/carts/coursevideocart';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import ButtonCustom from './../../component/Button';
const {width, height} = Dimensions.get('window');
const LearningVideoCheckList = ({navigation}) => {
  const [activecheck, setActivecheck] = useState([]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

      <FlatList
        data={data.videochecklist}
        renderItem={({item, index}) => (
          <View key={item?.id} style={styles.bgblueBox}>
            <Text style={styles.title}>{item?.title}</Text>
            {item?.ans?.map((items, index) => (
              <View key={items?.id}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => setActivecheck(items)}
                  style={styles.checkrow}>
                  <View style={styles.checkbox}>
                    <FontAwesome6
                      name="check"
                      size={16}
                      color={
                        activecheck == items
                          ? COLORS.primary
                          : COLORS.lightblue
                      }
                    />
                  </View>
                  <Text style={styles.checktext}>{items?.ans1} </Text>
                </TouchableOpacity>
              </View>
            ))}
            <ButtonCustom children="CHAT NOW" btnStyle={styles.btn} />
          </View>
        )}
      />
    </ScrollView>
  );
};

export default LearningVideoCheckList;
