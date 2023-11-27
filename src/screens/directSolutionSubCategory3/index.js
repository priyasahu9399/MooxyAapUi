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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Collapsible from 'react-native-collapsible';

const {height, width} = Dimensions.get('window');

const CollapsibleFaq = ({title, icon, head}) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const [active, setActive] = useState();

  return (
    <>
      <TouchableOpacity
        onPress={() => setCollapsed(!isCollapsed)}
        activeOpacity={0.5}
        style={[
          styles.row,
          isCollapsed == false && {backgroundColor: '#F1F5FF'},
        ]}>
        <Image source={icon} style={styles.fileicon} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={{marginHorizontal: width * 0.04}}>
          <Text style={styles.heading}>{head}</Text>
          <Text style={[styles.subText, {marginTop: height * 0.02}]}>
            The first module will act as a bridging{' '}
            <Text style={{color: '#FFCA00'}}>course</Text> for those students
            who do not have any prior knowledge about this field. For others,
            who already have prior knowledge about electrical and electronic
            engineering, this module will help them revise these concepts.The
            first module will act as a bridging{' '}
            <Text style={{color: '#FFCA00'}}>course</Text> for students.
          </Text>
        </View>
      </Collapsible>
    </>
  );
};

const DirectSolutionSubCategory3 = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [activecheck, setActivecheck] = useState();

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchbox}>
          <Image source={icons.search} style={styles.search} />
          <TextInput
            placeholder={'Coursel'}
            style={styles.searchinput}
            placeholderTextColor={COLORS.gray40}
          />
          <Text style={styles.number}>1/3</Text>
          <TouchableOpacity>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={25}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={25}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.x} style={styles.cross} />
          </TouchableOpacity>
        </View>

        <View style={styles.checkrow}>
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
            <Text style={styles.checktext}>Similar Search</Text>
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
            <Text style={styles.checktext}>Accurate Search</Text>
          </TouchableOpacity>
        </View>

        <View>
          <CollapsibleFaq
            title="AUDIO 1"
            icon={icons.pdf}
            head="Module 1 (Basics of mobile)"
          />
          <CollapsibleFaq
            title="AUDIO 2"
            icon={icons.pdf}
            head="Module 2 (Basics of mobile)"
          />
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DirectSolutionSubCategory3);
