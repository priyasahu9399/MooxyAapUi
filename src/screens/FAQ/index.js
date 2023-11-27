import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import Collapsible from 'react-native-collapsible';

const {height, width} = Dimensions.get('window');

const CollapsibleFaq = ({title, subhead}) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const [active, setActive] = useState();

  return (
    <>
      <TouchableOpacity
        onPress={() => setCollapsed(!isCollapsed)}
        activeOpacity={0.5}
        style={styles.row}>
        <Text style={styles.heading}>{title}</Text>
        {isCollapsed == true ? (
          <Entypo name="plus" size={22} style={styles.fileicon} />
        ) : (
          <Entypo name="minus" size={22} style={styles.fileicon} />
        )}
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={{marginHorizontal: width * 0.04}}>
          <Text style={[styles.subText, {marginTop: height * 0.015}]}>
            {subhead}
          </Text>
        </View>
      </Collapsible>
    </>
  );
};

const FAQ = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [activecheck, setActivecheck] = useState();

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>

      <Image  source={images.faqimg}  style={styles.img} />
        <Text style={styles.title}>FAQ's for Mobile Repair Course</Text>
        <CollapsibleFaq
          title="1. Do I need some basic knowledge of electronics to join this course?"
          subhead="No , you do not need electronic knowledge for this course"
        />
        <CollapsibleFaq
          title="2. What is the mobile repair course fees?"
          subhead="No , you do not need electronic knowledge for this course"
        />
        <CollapsibleFaq
          title="3. Course duration time?"
          subhead="No , you do not need electronic knowledge for this course"
        />
        <CollapsibleFaq
          title="4. What is the mobile phone repairing course syllabus?"
          subhead="No , you do not need electronic knowledge for this course"
        />
        <CollapsibleFaq
          title="5. What is the payment structure for the course?"
          subhead="No , you do not need electronic knowledge for this course"
        />
        <CollapsibleFaq
          title="6. Will I get certificate after completing the course?"
          subhead="No , you do not need electronic knowledge for this course"
        />
        <CollapsibleFaq
          title="7. Is your organization a training company?"
          subhead="No , you do not need electronic knowledge for this course"
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);
